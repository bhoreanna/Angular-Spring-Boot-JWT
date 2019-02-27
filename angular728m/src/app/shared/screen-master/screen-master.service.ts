import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScreenMaster } from 'src/app/models/screen-master';

@Injectable({
  providedIn: 'root'
})
export class ScreenMasterService {
 // private baseUrl = 'http://192.168.10.164:9991';
 // private baseUrl = 'http://192.168.8.105:9991';
  // Tomcat URL USIT OFFICE
  private baseUrl = 'http://192.168.10.164:8082/oshopservice/';

  constructor(private _http:  HttpClient) { }

  getScreenMasterList() {
    console.log('Get screenmaster List');
    return this._http.get<ScreenMaster[]>(this.baseUrl + '/screenmaster/screenMasterList');

  }
}
