import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL='http://localhost:8081/users'
  constructor(private httpClient: HttpClient) { }

  getAllPostByUser(id: any){
    return this.httpClient.get(this.API_URL + `/view/${id}`);
  }
  getAll(){
    return this.httpClient.get(this.API_URL);
  }
  delete(id: number) {
    return this.httpClient.delete(this.API_URL + `/${id}`)
  }
  getById(id: any): Observable<any> {
    return this.httpClient.get(this.API_URL + `/${id}`);
  }
  pageUser(nextPage: any){
    const params = nextPage;
    return this.httpClient.get(this.API_URL, {params}) //{params} thuoc ve ham get cua Angular
  }
}
