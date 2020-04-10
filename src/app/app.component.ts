import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Employee} from './employee';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private obj:Http){}
  //eobj:Employee[]=[];
  cobj:Customer[]=[]
  apivalues:string[]=[];
ourapiurl:string='https://localhost:44392/api/Customers';
// ourapiurl:string='https://localhost:44392/api/Employees';
  ngOnInit(): void {
    this.obj.get(this.ourapiurl).subscribe(values=>{this.cobj=values.json();})
  }
  title = 'WebApiApp';
  
 
}
