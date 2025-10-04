import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../../../core/services/client';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout',
  imports: [ReactiveFormsModule],
  templateUrl: './ajout.html',
  styleUrl: './ajout.css'
})
export class Ajout {
    clientForm: FormGroup;
    image: any
    constructor(private fb: FormBuilder, private _client: Client, private _router: Router){
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
    send(){
      let fd= new FormData();
      fd.append( 'fullname' , this.clientForm.value.fullname)
      fd.append( 'email' , this.clientForm.value.email)
      fd.append( 'tel' , this.clientForm.value.tel)
      fd.append( 'adress' , this.clientForm.value.adress)
      fd.append( 'image' , this.image)

      this._client.create(fd).subscribe({
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
