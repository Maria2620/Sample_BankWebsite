import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //sdata = "hello hii"

  constructor(private http:HttpClient) { }

  //api to register
  register(acno:any,uname:any,psw:any){
    const bodyData = {
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/register',bodyData)
  }

  // smethod(){
  //   alert("Service method")
  // }


   //api to login
   login(acno:any,psw:any){
    const body = {
      acno,
      psw
    }
    return this.http.post('http://localhost:3000/login',body)
  }
}
