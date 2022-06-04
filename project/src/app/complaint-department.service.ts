import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class ComplaintDepartmentService {

  private rootUrl: string = 'https://data.mongodb-api.com/app/data-nsxgr/endpoint/data/v1';
  private config = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

  constructor(private _http: HttpClient) {
  }


  getAll() {
    return this._http.get(this.rootUrl + '/');
  }

  getOne(id: String) {
    return this._http.get(this.rootUrl + '/' + id);
  }
}