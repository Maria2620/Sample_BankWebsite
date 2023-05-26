import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = "Happy Banking With Us!!"
  pdata = "Enter Account No"

  login(a:any){
    console.log(a.value);
    
    alert("Login Success")
  }

  acnoChange(event:any){
    console.log(event.target.value);
    
  }
}
