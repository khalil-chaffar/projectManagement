import { Component } from '@angular/core';
import { ReactiveFormsModule , FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Client } from '../../../../core/services/client';
import { User } from '../../../../core/services/user';
import { Project } from '../../../../core/services/project';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajoutproject',
  imports: [ReactiveFormsModule],
  templateUrl: './ajoutproject.html',
  styleUrl: './ajoutproject.css'
})
export class Ajoutproject {
  projectForm: FormGroup;
  clients: any;
  users: any;
  selectedTeam: any=[];
  files: any;
  constructor(private fb: FormBuilder, private _client: Client, private _user: User, private _project: Project, private _router: Router) {
    let controls = {
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required])
    }
    this.projectForm = this.fb.group(controls);
  }
  selectUser(e: any){
    let id = e.target.value;
    if(this.selectedTeam.indexOf(id) == -1){
      this.selectedTeam.push(id);
    }else{
      this.selectedTeam.splice(this.selectedTeam.indexOf(id), 1);
    }
    
  }

  selectImage(e: any){
    this.files = e.target.files;
  }
  ngOnInit(): void {
    this._client.list().subscribe((res: any) => {
      this.clients = res;
    });

    this._user.list().subscribe((res: any) => {
      this.users = res;
    });
  }
  send(){
    let fd = new FormData();
    fd.append('name', this.projectForm.value.name);
    fd.append('description', this.projectForm.value.description);
    fd.append('startDate', this.projectForm.value.startDate);
    fd.append('endDate', this.projectForm.value.endDate);
    fd.append('status', this.projectForm.value.status);
    fd.append('client', this.projectForm.value.client);
    fd.append('budget', this.projectForm.value.budget);
    fd.append('team', JSON.stringify(this.selectedTeam));
    
    for(let file of this.files){
      fd.append('files', file);
    }
    this._project.create(fd).subscribe( {
      next: (res:any) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your project has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              this._router.navigate(['/dashboard/project/list'])
            },
            error: (err:any) => {
              console.log(err);
            }
    });
    
  }
}
