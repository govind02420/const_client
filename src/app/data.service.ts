import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://192.168.0.104:9898/emp"
  constructor(private http: HttpClient) { }

  Select(){
    return this.http.get(this.url)
  }
  Insert(empObj){
    return this.http.post(this.url,empObj)
  }
  Update(empObj){
    return this.http.put(this.url+"/"+ empObj.id, empObj)
  }
  Delete(id){
    return this.http.delete(this.url+"/"+id)
  }
  SelectById(id){
    return this.http.get(this.url+"/"+id)
  }
}
