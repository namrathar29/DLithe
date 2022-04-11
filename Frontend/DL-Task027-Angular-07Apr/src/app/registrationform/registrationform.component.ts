import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signupUser(registrationForm: NgForm) {
    console.log(registrationForm);
  }
}
