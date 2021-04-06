import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  username:any;
  order:any;
  constructor(private us:UserService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
    this.getCart();
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/home");
  }
  
  getCart(){
    this.us.getOrderItems(this.username).subscribe(
      res=>{
        this.order=res["message"]
        console.log("placeorder data is",this.order)
      },
      err=>{

        this.toastr.warning('Something went wrong in adding to myorders');
        
        console.log(err)
      }
    )
  }


  delete(n:number){
    let obj5=this.order[n];
    this.us.deleteOrderProduct(obj5).subscribe(
      res=>{
        if(res["message"]){

          this.toastr.success('Product removed from myorders');

          console.log("deleted successfully")

          this.router.navigateByUrl("/placeorder").then(() => {​​​​​
            window.location.reload();
          }​​​​​);
        }
      },
      err=>{
        this.toastr.warning('Something went wrong in product deletion');
        console.log(err);
      }
    )

  }

}
