import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  emp =  {
    "id" : "",
    "name" : "",
    "email" : "",
    "age" : ""
  };

  constructor(private service: DataService, private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    
  }

  Insert(){
    console.log(this.emp);
    let observableResult = this.service.Insert(this.emp);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/employee']);
    })
  }
}
