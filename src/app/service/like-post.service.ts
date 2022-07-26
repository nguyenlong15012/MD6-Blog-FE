import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";



const API_URL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class LikePostService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  getTotalLike(idPost: number): Observable<any> {
    return this.http.get<any>(API_URL + `like/${idPost}`);
  }

  updateLikePost(idUser:number, idPost: number): Observable<any> {
    return this.http.get(API_URL + `like/${idUser}/${idPost}`);
  }
}
