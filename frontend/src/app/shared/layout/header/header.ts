import { Component } from '@angular/core';
import { Authentication } from '../../../core/auth/authentication';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  user: any;
  constructor(private _auth: Authentication) { }
  ngOnInit(): void {
    this.user = this._auth.getDataFromToken();
  }
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }
}
