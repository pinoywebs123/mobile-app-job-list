import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JoblistProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class JoblistProvider {
  url: string;
  key : string;
  url2 : string;
  constructor(public http: Http) {
    this.key = '9945025717887439';
    this.url = 'http://localhost:8100/api/apisearch?publisher='+this.key+'&q=';
    this.url2 = '&co=ph&start=0&limit=25&format=json&v=2';
  }

  getList(search){
    return this.http.get(this.url+search+this.url2).map(res=> res.json());
  }

}
