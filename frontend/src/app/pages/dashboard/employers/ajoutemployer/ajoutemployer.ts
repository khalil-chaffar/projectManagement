import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { User } from '../../../../core/services/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajoutemployer',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './ajoutemployer.html',
  styleUrl: './ajoutemployer.css'
})
export class Ajoutemployer {
  userForm: FormGroup;
  image: any;
  tags: any = [];
  singleTag='';
  constructor(
    private fb: FormBuilder,
    private _user: User,
    private _router: Router
  ) {
    let controls = {
      fullname: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    };   
    this.userForm = fb.group(controls);
  }

  createTag(){
    this.tags.push(this.singleTag);
    this.singleTag='';
  }
  selectImage(e: any){
    this.image = e.target.files[0];
  }
  create(){
    let fd = new FormData();
    fd.append('fullname', this.userForm.value.fullname);
    fd.append('tel', this.userForm.value.tel);
    fd.append('email', this.userForm.value.email);
    fd.append('password', this.userForm.value.password);
    fd.append('tags', JSON.stringify(this.tags));
    fd.append('image', this.image);

    this._user.create(fd).subscribe({
      next: (res:any) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your client has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        this._router.navigate(['/dashboard/employe/list'])
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }
}
