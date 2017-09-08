import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { authUrl, contentHeaders } from '../../common/app.communication';

@Component({
  selector: 'app-login',
  template: `
    <div class = "jumbotron" style="width:50%;">
    
    <div *ngIf="invalidSignIn" class="panel panel-danger">
      <div class="panel-heading">Invalid username or password</div>
    </div>

      <form>
  
        <div class="input-group" style="margin: 5px">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input #unInput id="login" type="text" class="form-control" name="login" placeholder="Login" [(ngModel)]="username" (focus)="invalidSignIn=false">
        </div>
    
        <div class="input-group" style="margin: 5px">
          <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
          <input #pwInput id="password" type="password" class="form-control" name="password" placeholder="Password" [(ngModel)]="password" (focus)="invalidSignIn=false">
        </div>
      
        <button type="button" class="btn btn-primary" style="margin-left:5px; margin-top:15px; margin-right:10px; display: inline-block;" (click)="signIn(username, password)">Sign In</button>
        <button type="button" class="btn btn-default" style="margin-top:15px; display: inline-block;" (click)="clearInputs()">Cancel</button>
      </form>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  @Input() username;
  @Input() password;

  @ViewChild('unInput') unInput;
  @ViewChild('pwInput') pwInput;

  invalidSignIn = false;

  constructor(private router:Router, private http: Http) { }

  clearInputs() {
    this.unInput.nativeElement.value = null;
    this.pwInput.nativeElement.value = null;
  }

  signIn(username, password) {
    let user = {"username": username, "password": password};
    let body = JSON.stringify(user);
    this.http.post(authUrl, body, {headers: contentHeaders})
      .map(res => res.json())
      .subscribe(
        data => {
          if (data.status == 'ok') {
            this.invalidSignIn = false;
            this.router.navigate(['/home/'+username]);
          }
          else {
            this.invalidSignIn = true;
          }
        },
        err => {
          console.log('Could not authentificate the user:'+err);
        });
  }

  ngOnInit() {
  }

}
