import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {GithubComponent} from './components/github/github.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, GithubComponent, StatusComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }