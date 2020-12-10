import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  public static getLocalStorageObj(item: string, property?: any):any{
    const jsonObj = JSON.parse(localStorage.getItem(item));
    return property ? jsonObj[property] : jsonObj;
  }
}
