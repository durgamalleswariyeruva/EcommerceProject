import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from'@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewadminproductsComponent } from './viewadminproducts/viewadminproducts.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';


@NgModule({
  declarations: [AdminComponent, ViewadminproductsComponent, UpdatedetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
