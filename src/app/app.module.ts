import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {GithubComponent} from './components/github/github.component';
import { StatusComponent } from './components/status/status.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'github', component: GithubComponent },
  {
    path:'',
    redirectTo:'/status',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule,ChartsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, GithubComponent, StatusComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }