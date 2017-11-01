import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private apiUrl: String;

  constructor(public http: HttpClient, public storage: Storage) {
  }

  init() {
    let promiseList: Promise<any>[] = [];

    promiseList.push(
      this.storage.get('apiUrl').then((val) => {
       this.apiUrl = val;
     }));

    return Promise.all(promiseList);
  }

  getDirectories(path): Observable<string[]> {
    return this.http.get(this.apiUrl + "/arbo?path=" + path)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getServerInfos(): Observable<string[]> {
    return this.http.get(this.apiUrl + "/serverinfos")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getDownloads(): Observable<string[]> {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl + "/downloads")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getDownload(id): Observable<string[]> {
    return this.http.get(this.apiUrl + "/download/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteDownload(id): Observable<string[]> {
    return this.http.delete(this.apiUrl + "/download/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  postDonwload(payload): Observable<string[]> {
    console.log(payload);
    return this.http.post(this.apiUrl + "/downloads", payload)
              .map(this.extractData)
              .catch(this.handleError)
  }

  postMobileToken(payload): Observable<string[]> {
    console.log(payload);
    return this.http.post(this.apiUrl + "/mobile/token", payload)
              .map(this.extractData)
              .catch(this.handleError)
  }

  private extractData(res: Response) {
    console.log("response");
    console.log(res);
    let body = res;
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
