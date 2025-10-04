import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Board {
  url = 'http://127.0.0.1:3000/board/';
  constructor(private http : HttpClient) { }
  
  byId(id:any){
    return this.http.get(this.url + 'byid/' + id);
  }
  update(id:any, data:any){
    return this.http.put(this.url + 'update/' + id, data);
  }
}
