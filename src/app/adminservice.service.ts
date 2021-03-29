import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private hc:HttpClient) { }
  createproduct(proObj:any):Observable<any>{
    console.log("products is",proObj);
    
    return this.hc.post("/admin/productdetails",proObj);
  }
  getlist():Observable<any>{
    return this.hc.get("/admin/getlist/")
  }
  deleteProduct(obj:any):Observable<any>{
    console.log("products is",obj);
    
    return this.hc.post("/admin/delete",obj);
  }
}
