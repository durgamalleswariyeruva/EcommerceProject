import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import{ViewadminproductsComponent} from './viewadminproducts/viewadminproducts.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:"viewadminproducts",component:ViewadminproductsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
