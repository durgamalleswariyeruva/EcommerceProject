import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
Cart=[];
username;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
     //this.productname=this.route.snapshot.params['productname'];
     this.service.getCart(this.username).subscribe(
      res=>{
            this.Cart=res["message"]
            console.log(this.Cart)
      },
      err=>{
        console.log(err)
      }
    )
  }

}

