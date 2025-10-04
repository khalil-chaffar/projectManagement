import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../core/services/user';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updateemployer',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './updateemployer.html',
  styleUrl: './updateemployer.css'
})
export class Updateemployer {
  userForm: FormGroup;
  image: any;
  tags: any = [];
  singleTag='';
  id: any;
  constructor(
    private fb: FormBuilder ,
    private _act: ActivatedRoute, 
    private _user: User,
    private _router: Router) {
    let controls = {
      fullname: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', []]
    };   
    this.userForm = fb.group(controls);
  }
  ngOnInit() {
    this.id = this._act.snapshot.paramMap.get('id');
    this._user.byId(this.id).subscribe({
      next: (res : any)=> {
        this.userForm.reset(res);
        this.tags = res.tags ;
      }})
  }

  createTag(){
    this.tags.push(this.singleTag);
    this.singleTag='';
  }
  deleteTag(index: number){
    this.tags.splice(index,1)
  }
  selectImage(e: any){
    this.image = e.target.files[0];
  }
  save(){
    let fd = new FormData();
    fd.append('fullname', this.userForm.value.fullname);
    fd.append('tel', this.userForm.value.tel);
    fd.append('email', this.userForm.value.email);
    fd.append('tags', JSON.stringify(this.tags));
    const password = this.userForm.value.password;
    if(password && password.length > 0){
      fd.append('password', password);
    }
    if(this.image){
      fd.append('image', this.image);
    }
    this._user.update(this.id, fd).subscribe({
      next: (res)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your client has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        this._router.navigate(['/dashboard/employe/list'])
      }
    })
  }
}
