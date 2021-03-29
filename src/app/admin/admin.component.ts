import { Component, OnInit } from '@angular/core';
import{AdminserviceService} from'../adminservice.service';
import{Router} from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    //for uploading file;
    file!:File; 

    incomingfile(event:any) { 
      this.file= event.target.files[0];
     }

  constructor(private as:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formRef:any){
    console.log(formRef.value);
    let proObj=formRef.value;
    let formData=new FormData(); //adding image and other data to FormData object 
    formData.append('photo',this.file,this.file.name); 
    formData.append("proObj",JSON.stringify(proObj));
    console.log(formData);
    this.as.createproduct(formData).subscribe(
      res=>{
     
      
          alert("product added successfully");
          this.router.navigateByUrl("/admindashboard/viewadminproducts");
       
         
 
      },
      err=>{
        alert("something went wrong in product creation");
        console.log(err)
      }
    )
  }
  viewadminproducts(){
    this.router.navigateByUrl("/admindashboard/viewadminproducts");
  }

}
