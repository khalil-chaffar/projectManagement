import { Component } from '@angular/core';
import { Client } from '../../../core/services/client';
import { Project } from '../../../core/services/project';
import { User } from '../../../core/services/user';
import { NgxChartsModule  } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-statistics',
  imports: [NgxChartsModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class Statistics {
  clients: any;
  projects: any;
  users: any;
  saleData = [
    { name: "projects", value: 0 },
    { name: "users", value: 0 },
    { name: "clients", value: 0 }
  ];
  lineChartData = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        },
        {
          "name": "2012",
          "value": 8000000
        },
        {
          "name": "2011",
          "value": 9500000
        },
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    }
  ]

  constructor(private _client:Client, private _project:Project, private _user:User ){}
  ngOnInit(){
    this.getAllClients();
    this.getAllProjects();
    this.getAllUsers();
  }

  getAllUsers(){
    this._user.list().subscribe({
      next: (res:any) => {
        this.users = res;
        this.saleData[1].value = this.users.length;
      }
    });
  }
  getAllClients(){
    this._client.list().subscribe({
      next: (res:any) => {
        this.clients = res;
        this.saleData[2].value = this.clients.length;
      }
    });
  }
  getAllProjects(){
    this._project.list().subscribe({
      next: (res:any) => {
        this.projects = res;
        this.saleData[0].value = this.projects.length;
      }
    });
  }
  
}
