import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public baseApiUrl = environment.API + 'auth/';
  constructor(private _http: HttpClient) { }

  login(data) {
    return new Promise((resolve, reject) => {
      this._http.post(this.baseApiUrl + 'login', data)
        .subscribe(
          success => resolve(success),
          error => reject(error)
        )
    })
  }

  getImage(imageName) {
    return new Promise((resolve, reject) => {
      this._http.get(this.baseApiUrl + 'profile?img=' + imageName)
        .subscribe(
          success => resolve(success),
          error => reject(error)
        )
    })
  }
  
  getImage2(imageName) {
    return this._http.get(this.baseApiUrl + 'profile?img=' + imageName)
    
  }
}
