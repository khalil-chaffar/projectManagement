import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Client } from '../../../../core/services/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  imports: [RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  clients: any;
  constructor(private _client: Client){}
  ngOnInit(): void{
    this._client.list().subscribe( {
      next: (res)=> {
        this.clients = res;
      },
      error: (err)=> {
        console.log(err);
      } 
      
    });
  }
  delete(id: any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._client.delete(id).subscribe({
          next: (res)=> {
            this.ngOnInit();
          },
          error: (err)=> {
            console.log(err);
          }
        }); 
      }
    });
  }
}
