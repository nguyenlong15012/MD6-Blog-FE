import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL='http://localhost:8081/post'
  constructor(private httpClient:HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  save(post: Post): Observable<any> {
    return this.httpClient.post(this.API_URL, post)
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(this.API_URL + `/${id}`);
  }

  delete(id: number) {
    return this.httpClient.delete(this.API_URL + `/${id}`)

  }

  update(post: any, id: any): Observable<Post> {
    // @ts-ignore
    return this.httpClient.put(this.API_URL + `/${id}`, post);
  }
}
