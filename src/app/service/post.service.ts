import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL='http://localhost:8081/post'
  API_USER_ID = environment.API_LOCAL
  private API_ADMIN = environment.API_LOCAL + 'admin';
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

  findAllPublicStatus(): Observable<Post>{
    return  this.httpClient.get(this.API_URL + '/find-all-public-status')
  }

  findAllByTitleContaining(title:any): Observable<Post>{
    return this.httpClient.get(this.API_URL+`/search?title=`+`${title}`)
  }

  findCommentByPost(idPost: any): Observable<any>{
    return this.httpClient.get(this.API_URL+'/view-comment'+`/${idPost}`)
  }

  pagePost(nextPage: any){
    const params = nextPage;
    return this.httpClient.get(this.API_ADMIN, {params}) //{params} thuoc ve ham get cua Angular
  }

  pagePostUser(nextPage: {page: number, size: number}, id: number){
    return this.httpClient.get(this.API_USER_ID + `users/view/${id}?page=${nextPage.page}&size=${nextPage.size}`)
  }
}
