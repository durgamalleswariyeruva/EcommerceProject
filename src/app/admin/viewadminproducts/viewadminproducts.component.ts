import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-viewadminproducts',
  templateUrl: './viewadminproducts.component.html',
  styleUrls: ['./viewadminproducts.component.css']
})
export class ViewadminproductsComponent implements OnInit {
  listObj:any;
  constructor( private as:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.listObj=this.as.getlist().subscribe(
      res=>{ 
        if(res["message"]=="success"){
          this.listObj=res.list;
          console.log(this.listObj);
          }
        else{
          alert(res["message"])
         
        }
      }, 
      err=>{ 
        alert("Something went wrong") 
        console.log(err)
       }
  ) 
  }
  delete(ing:number){
    let obj=this.listObj[ing];
    console.log("the deleted obj is ",obj)

    this.as.deleteProduct(obj).subscribe(
      res=>{
        if(res["message"]){
          alert("Product removed successfully");
          window.location.reload();
        
        }
      },
      err=>{
        alert("Something went wrong in user creation");
        console.log(err);
      }
    )

  }
  addnewproduct(){
    this.router.navigateByUrl("/admindashboard")
  }
  edit(one){
    localStorage.setItem("pname",one["pname"]);
    this.router.navigateByUrl("/admindashboard/updatedetails");
  }
  

}
