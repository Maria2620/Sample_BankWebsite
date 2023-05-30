import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


acno:any
uname:any
psw:any
cpsw:any

signup(){
  // console.log(this.acno);
  // console.log(this.uname);
  // console.log(this.psw);
  // console.log(this.cpsw);

//another method:
  var acno = this.acno
  var uname = this.uname
  var pswd = this.psw
  var cpswd = this.cpsw

  console.log(acno);
  console.log(uname);
  console.log(pswd);
  console.log(cpswd);

}

}
