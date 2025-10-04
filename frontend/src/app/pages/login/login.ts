import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../core/services/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder , private _user: User, private _router: Router) {
    let controls= {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    };
    this.loginForm = this.fb.group(controls);
  }
  login(){
    
    this._user.login(this.loginForm.value).subscribe({
      next: (res:any) => {
        localStorage.setItem("token", res.myToken);

        this._router.navigate(['/dashboard']);
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! please try again",
          
        });
      }
    })
    
  }
}
