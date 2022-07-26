import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {Observable} from "rxjs";
import {Comment} from "../model/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  API_URL='http://localhost:8081/comments'
  constructor(private httpClient:HttpClient) { }

  save(comment: Comment): Observable<any> {
    return this.httpClient.post(this.API_URL, comment)
  }

  delete(idComment: number) {
    return this.httpClient.delete(this.API_URL + `/${idComment}`)

  }
}
