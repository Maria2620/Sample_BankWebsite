import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


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

constructor(private ds: DataService,private router:Router) { }

 ngOnInit(): void {

 }

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

  if(pswd == cpswd){
    this.ds.register(acno, uname, pswd).subscribe((result:any) => {
      alert(result.message)
      this.router.navigateByUrl("")
    },
      result => {
        alert(result.error.message)
    }
  )
}
  else{
    alert("Password doesn't match")
  }

}

}
