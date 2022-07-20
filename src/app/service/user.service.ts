import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL='http://localhost:8081/user'
  constructor(private httpClient: HttpClient) { }

  getAllPostByUser(id: any){
    return this.httpClient.get(this.API_URL + `/view/${id}`);
  }
}
