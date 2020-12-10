import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, ReplaySubject } from 'rxjs';
import { GeneralService } from './general.service';
import { map } from 'rxjs/operators';
import { AccountModel } from 'dist/myApplication/assets/models/account.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
  ) { }
private jsonObj: any;

public initConfig(){
  if(!localStorage.getItem('restapi')){
    this.httpClient.get('./assets/properties/restapi.json').toPromise()
    .then((data) => {
      localStorage.setItem('restapi', JSON.stringify(data));
      this.jsonObj = GeneralService.getLocalStorageObj('restapi');
      });
  }else{
    this.jsonObj = GeneralService.getLocalStorageObj('restapi');
  }
}

public createAccountService(account: AccountModel): Observable<any>{
  // return this.httpClient.post()
  return this.httpClient.post<any>(this.jsonObj.createAccountURL, account)
  .pipe(
    map((res) => {
      console.log(res);
    }),
  );
}
}
