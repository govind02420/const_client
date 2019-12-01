import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp : any;
  constructor(private service : DataService) {
    console.log("dsdfs");
    
   }

  ngOnInit() {
    var selectResult = this.service.Select();
    selectResult.subscribe((result)=>{
      console.log(result);      
      this.emp = result;
    })
  }

}
