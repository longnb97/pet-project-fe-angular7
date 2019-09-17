import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: String;
  public password: String;
  public file_form: any;
  public loginResponse: any;

  constructor(
    private _authService: AuthenticateService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  loginMyProject() {
    let data = {
      username: this.username,
      password: this.password
    };
    this._authService.login(data)
      .then(res => {
        this.loginResponse = res;
        if (this.loginResponse.token){
          console.log('đăng nhập thành công!');
          localStorage.setItem('access_token', this.loginResponse.token);
          this._router.navigate(['/chat']);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

}

