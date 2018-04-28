import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  newUser = { email: '', password: ''}
  constructor() { }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.newUser.email, this.newUser.password);
  }

}
