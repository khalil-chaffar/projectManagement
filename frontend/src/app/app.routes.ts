import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';
import { Statistics } from './pages/dashboard/statistics/statistics';
import { Clients } from './pages/dashboard/clients/clients';
import { Projects } from './pages/dashboard/projects/projects';
import { Employers } from './pages/dashboard/employers/employers';
import { Ajout } from './pages/dashboard/clients/ajout/ajout';
import { List } from './pages/dashboard/clients/list/list';
import { Update } from './pages/dashboard/clients/update/update';
import { Ajoutproject } from './pages/dashboard/projects/ajoutproject/ajoutproject';
import { Listproject } from './pages/dashboard/projects/listproject/listproject';
import { Updateproject } from './pages/dashboard/projects/updateproject/updateproject';
import { Previewproject } from './pages/dashboard/projects/previewproject/previewproject';
import { Ajoutemployer } from './pages/dashboard/employers/ajoutemployer/ajoutemployer';
import { Listemployer } from './pages/dashboard/employers/listemployer/listemployer';
import { Updateemployer } from './pages/dashboard/employers/updateemployer/updateemployer';
import { dashGuard } from './core/guards/dash-guard';
import { loginGuard } from './core/guards/login-guard';
import { adminGuard } from './core/guards/admin-guard';


export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},

    {path: 'dashboard', canActivate:[dashGuard] ,component: Dashboard, children:[
        { path: '', redirectTo: 'statistics', pathMatch:'full'},
        { path: 'statistics',canActivate:[adminGuard] , component: Statistics},

        { path: 'client', canActivate:[adminGuard] ,component: Clients, children:[

            {path: '', redirectTo:'list', pathMatch:'full'},
            { path: 'ajout' , component: Ajout},
            { path: 'list' , component: List},
            { path: 'update/:id' , component: Update},

        ]},

        { path: 'project', component: Projects, children:[

            {path: '', redirectTo:'list', pathMatch:'full'},
            { path: 'ajout' , canActivate:[adminGuard] ,component: Ajoutproject},
            { path: 'list' , component: Listproject},
            { path: 'update/:id' , component: Updateproject},
            { path: 'preview/:id' , canActivate:[adminGuard],component: Previewproject},

        ]},
        { path: 'employe', canActivate:[adminGuard] ,component: Employers, children: [

            {path: '', redirectTo:'list', pathMatch:'full'},
            { path: 'ajout' , component: Ajoutemployer},
            { path: 'list' , component: Listemployer},
            { path: 'update/:id' , component: Updateemployer},
            
        ]}
    ]},

    {path: 'login', canActivate:[loginGuard] ,component: Login},

    {path: '**', component: Notfound}
];
