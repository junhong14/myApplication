import { Component } from '@angular/core';
import { LoginService } from '../app/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApplication';

  constructor(
    private loginService: LoginService,){}

  ngOnInit(){
    this.loginService.initConfig();
  }
}
