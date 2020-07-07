import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher'
  answer = ''
  genders = ['male', 'female']
  user = {
    username: '',
    email: '',
    secret: '',
    question: '',
    gender: '',
  }
  submitted = false ;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }


  onSubmit() {
    this.submitted = true ;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.question = this.signupForm.value.question;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
