import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EluIComponent } from './elujoudIntrp.component';
import { StruktComponent } from './matrixStrukt/matrixStrukt.component';
import { MaksevoimComponent } from './matrixMaksevoim/matrixMaksevoim.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //{ path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    EluIComponent,
    StruktComponent,
    MaksevoimComponent
//    UserComponent,
//    User2Component,
//    User3Component,
//    User4Component
//    User6Component
  ],
  bootstrap: [
    EluIComponent
  ]
})
export class EluIModule { }