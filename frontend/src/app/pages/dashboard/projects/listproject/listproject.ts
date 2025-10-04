import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Project } from '../../../../core/services/project';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listproject',
  imports: [RouterModule],
  templateUrl: './listproject.html',
  styleUrl: './listproject.css'
})
export class Listproject {
  projects: any;
  constructor( private _project: Project) { }
  ngOnInit(): void {
    this._project.list().subscribe( {
      next: (res)=>{
        this.projects = res;
        console.log(this.projects);
      }
    });
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
          this._project.delete(id).subscribe({
            next:(res)=>{
              this.ngOnInit();
            }
          })
        }
      });
    }
        
}

