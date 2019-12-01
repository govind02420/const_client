import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: DataService, private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let id = result.get("id");
      console.log(id);
      let updateResult = this.service.Delete(id);
      updateResult.subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/employee']);
      })
      
    })
  }

}
