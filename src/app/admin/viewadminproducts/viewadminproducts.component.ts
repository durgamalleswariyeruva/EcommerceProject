import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-viewadminproducts',
  templateUrl: './viewadminproducts.component.html',
  styleUrls: ['./viewadminproducts.component.css']
})
export class ViewadminproductsComponent implements OnInit {
  lengthofarray : any;
  listObj:any;
  spinning:any=0
  constructor( private as:AdminserviceService,private router:Router,private ts:ToastrService) { }

  ngOnInit(): void {
    this.listObj=this.as.getlist().subscribe(
      res=>{ 
        if(res.message){
          this.listObj=res.message;
          this.lengthofarray=this.listObj.length;
          this.spinning=1;

          }
        else{

          this.ts.warning(res["message"])
         
        }
      }, 
      err=>{ 

        this.ts.warning("Something went wrong") 
        
       }
  ) 
  }
  delete(ing:number){
    let obj=this.listObj[ing];

    this.as.deleteProduct(obj).subscribe(
      res=>{
        if(res.message){
          this.ts.success("Product removed successfully");
          window.location.reload();
        
        }
      },
      err=>{
        this.ts.warning("Something went wrong in user creation");
      }
    )

  }
  
  edit(one:any){
    localStorage.setItem("pname",one["pname"]);
    this.router.navigateByUrl("/admindashboard/updatedetails");
    
  }






































  
  reloadPage() {
    window.location.reload();
 }
  

}
