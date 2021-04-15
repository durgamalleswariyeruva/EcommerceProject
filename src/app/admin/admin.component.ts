import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../adminservice.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  registerForm: FormGroup=new FormGroup({});;
  //for uploading file;
  file!:File; 

  incomingfile(event:any) { 
    this.file= event.target.files[0];
   }

constructor(private as:AdminserviceService,private router:Router,private ts:ToastrService) { }

ngOnInit(): void {
  this.registerForm=new FormGroup({
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
}
onSubmit(){
  console.log(this.registerForm.value);
  let proObj=this.registerForm.value;
  let formData=new FormData(); //adding image and other data to FormData object 
  formData.append('photo',this.file,this.file.name); 
  formData.append("proObj",JSON.stringify(proObj));
  console.log(formData);
  this.as.createproduct(formData).subscribe(
    res=>{
      console.log(res);
    
      this.ts.success("product added successfully");
        this.router.navigateByUrl("/admindashboard/viewadminproducts");
     
       

    },
    err=>{
      alert("something went wrong in product creation");
      console.log(err)
    }
  )
}

getcontrol(){
  return this.registerForm.controls;
}


}
