import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../../core/services/client';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
    clientForm: FormGroup;
    image: any
    id: any
    prevImage: any
    constructor(
      private fb: FormBuilder,
      private _act: ActivatedRoute,
      private _client: Client,
      private _router: Router
    ){
      let controls = {
        fullname : new FormControl('', [ Validators.required]),
        email : new FormControl('', [ Validators.required , Validators.email]),
        tel : new FormControl('', [ Validators.required]),
        adress : new FormControl('', [ Validators.required])
      }
      this.clientForm = this.fb.group(controls);
    }
    selectImage(e: any){
      this.image= e.target.files[0];

    }
    ngOnInit(): void{
      this.id = this._act.snapshot.paramMap.get('id');
      
      this._client.byId(this.id).subscribe({
        next: (res: any)=>{
          this.clientForm.reset(res);
          this.prevImage = res.image;
        }
      })
    }
    send(){
      let fd= new FormData();
      fd.append( 'fullname' , this.clientForm.value.fullname)
      fd.append( 'email' , this.clientForm.value.email)
      fd.append( 'tel' , this.clientForm.value.tel)
      fd.append( 'adress' , this.clientForm.value.adress)
      if(this.image){
        fd.append( 'image' , this.image);
      }
      this._client.update(this.id, fd).subscribe({
        next: (res)=>{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your client has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this._router.navigate(['/dashboard/client/list'])
        }
      })
    }
}
