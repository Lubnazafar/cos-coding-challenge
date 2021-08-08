import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from "./core/login/login.component"; 
import {HomeComponent} from "./core/home/home.component"; 


const appRoutes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
    appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
