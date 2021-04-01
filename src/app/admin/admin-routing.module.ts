import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import{ViewadminproductsComponent} from './viewadminproducts/viewadminproducts.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:"viewadminproducts",component:ViewadminproductsComponent},
{path:"updatedetails",component:UpdatedetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
