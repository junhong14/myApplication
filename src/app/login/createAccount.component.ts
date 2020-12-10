import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Observable, Subscription, ReplaySubject } from 'rxjs';
import { AccountModel } from '../../assets/models/account.model';

@Component({
  selector: 'app-createAccount',
  templateUrl: './createAccount.component.html',
  styleUrls: ['./createAccount.component.css']
})
export class CreateAccountComponent implements OnInit {
  public loginForm: FormGroup;
  imgSrc = 'assets/images/alps.jpg';
  private subscriptions: Subscription[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
  ) { }
  
  public createAccount():void {

    const account: AccountModel = this.getDataFromForm();
    // console.log('JUNHONG', account);
    // this.loginService.createAccountService(account);

    const accountSubscription: Subscription = this.loginService.createAccountService(account).subscribe(
      () => {
        
      });
    this.subscriptions.push(accountSubscription);
  }

  ngOnInit() {
    this.createForm();
  }


  getDataFromForm(): AccountModel{
    const account: AccountModel = new AccountModel();
    account.username = this.loginForm.value.username;
    account.password = this.loginForm.value.password;
    account.firstName = this.loginForm.value.firstName
    account.lastName = this.loginForm.value.lastName;
    account.dob = this.loginForm.value.dob;
    return account;
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl(''),
      lastName: new FormControl(''),
      firstName: new FormControl(''),
      dob: new FormControl('')
    });
  }

}
