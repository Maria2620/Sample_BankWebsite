import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  data = "Happy Banking With Us!!"
  pdata = "Enter Account No"

  serviceData:any

  acno:any
  psw:any

  constructor(private rout:Router, private ds:DataService) { }

  ngOnInit(): void{
    // this.serviceData = this.ds.sdata
    // console.log(this.serviceData);
    // this.ds.smethod()
    
  }

  login(){
    // console.log("Login Success");
    
    // alert("Login Success")

    var acno = this.acno
    var psw = this.psw
    this.ds.login(acno,psw).subscribe((result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl('home')
    },
    result=>{
      alert(result.error.message)
      this.rout.navigateByUrl("")

    }
    )
    
  }

  // acnoChange(event:any){
  //   console.log(event.target.value);
    
  // }

 
}
