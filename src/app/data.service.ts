import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sdata = "hello hii"

  constructor() { }

  smethod(){
    alert("Service method")
  }
}
