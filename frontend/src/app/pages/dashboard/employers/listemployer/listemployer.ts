import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../../../core/services/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemployer',
  imports: [RouterModule],
  templateUrl: './listemployer.html',
  styleUrl: './listemployer.css'
})
export class Listemployer {
  employers : any ;
  constructor(private _user: User) {
    
  }

  ngOnInit() {
    this._user.list().subscribe({
      next: (res)=> {
        this.employers = res;
      }
    })
  }
  delete(id:any){
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
        this._user.delete(id).subscribe({
          next:(res)=>{
            this.ngOnInit();
          }

        })
      }
    });
  }
}
