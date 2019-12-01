import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp =  {
      "id" : "",
      "name" : "",
      "email" : "",
      "age" : ""
    };

  constructor(private service: DataService, private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let id = result.get("id");
      console.log(id);
      let updateResult = this.service.SelectById(id);
      updateResult.subscribe((result)=>{
        console.log(result);
        this.emp = result[0];        
      })
      
    })
  }

  Update(){
    console.log(this.emp);
    let observableResult = this.service.Update(this.emp);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/employee']);
    })
  }

}
