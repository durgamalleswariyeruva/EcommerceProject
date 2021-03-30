import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from'@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewadminproductsComponent } from './viewadminproducts/viewadminproducts.component';


@NgModule({
  declarations: [AdminComponent, ViewadminproductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
