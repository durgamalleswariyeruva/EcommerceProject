import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  pname;
  registerForm=new FormGroup({
    pname:new FormControl(null,Validators.required),
    pbrand:new FormControl(null,Validators.required),
    pmodel:new FormControl(null,Validators.required),
    pCategory:new FormControl(null,Validators.required),
    pdate:new FormControl(null,Validators.required),
    pcol:new FormControl(null,Validators.required),
    pprice:new FormControl(null,Validators.required),
    pwarranty:new FormControl(null,Validators.required),
    psoldby:new FormControl(null,Validators.required),
    pdescription:new FormControl(null,Validators.required),
    pInstructions:new FormControl(null,Validators.required),
    pdisclaimer:new FormControl(null,Validators.required),
    pquantity:new FormControl(null,Validators.required),
    prating:new FormControl(null,Validators.required),
    pdiscount:new FormControl(null,Validators.required),
  })

  constructor(private as:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.pname=localStorage.getItem("pname");
    this.getcurrentdata();
 
    
  }
  getcontrol(){
    return this.registerForm.controls;
  }
  getcurrentdata(){
  this.as.getcurrentdata(this.pname).subscribe(res=>{
    console.log(res);

    this.registerForm=new FormGroup({
      pname:new FormControl(res.Details['pname']),
      pbrand:new FormControl(res.Details['pbrand']),
      pmodel:new FormControl(res.Details['pmodel']),
      pCategory:new FormControl(res.Details['pCategory']),
      pdate:new FormControl(res.Details['pdate']),
      pcol:new FormControl(res.Details['pcol']),
      pprice:new FormControl(res.Details['pprice']),
      pwarranty:new FormControl(res.Details['pwarranty']),
      psoldby:new FormControl(res.Details['psoldby']),
      pdescription:new FormControl(res.Details['pdescription']),
      pInstructions:new FormControl(res.Details['pInstructions']),
      pdisclaimer:new FormControl(res.Details['pdisclaimer']),
      pquantity:new FormControl(res.Details['pquantity']),
    prating:new FormControl(res.Details['prating']),
    pdiscount:new FormControl(res.Details['pdiscount']),

      
    })

  })
}
  onSubmit(){
    console.log(this.registerForm.value);
    let proObj=this.registerForm.value;
    this.as.editproduct(proObj).subscribe(
      res=>{
        if(res["message"]){
          alert("product details are updated")
          this.router.navigateByUrl("/admindashboard/viewadminproducts")
        }
      },
      err=>{
        alert("Something went wrong")
        console.log(err)
      }
    )
   
  }
  viewproducts(){
    this.router.navigateByUrl("/admindashboard/viewadminproducts");
  }

}
