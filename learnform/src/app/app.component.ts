import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projectForm : FormGroup;
  submitted = false ;
projectDetails  = {
  name : '',
  email : '',
  status : '',
}

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenProjectNameAsync),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus' : new FormControl('stable')
    })
  }

  forbiddenProjectName(control: FormControl) : { [s: string] : boolean} {
    if (control.value === 'test') {
      return { 'nameIsFrobidden': true }
    }
    else {
      return null
    }
  }
  forbiddenProjectNameAsync(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test' || control.value === 'Test') {
          resolve({ 'nameIsFrobidden': true })
        }
        else {
          resolve(null)
        }
      }, 1000)
    })
    return promise ;
     }

  onSubmit(){
    console.log(this.projectForm)
    this.submitted = true ;
    this.projectDetails.name = this.projectForm.value.projectName;
    this.projectDetails.email = this.projectForm.value.email;
    this.projectDetails.status = this.projectForm.value.projectStatus;
    console.log(this.projectDetails)
  }
  
}

















// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   genders = ['male', 'female'];
//   signupForm: FormGroup;
//   forbiddenUsernames = ['rahul', 'kaushal']
//   forbiddenEmails = ['rahulksharma@clavax.us', 'sharma.rahul5467@gmail.com']

//   ngOnInit() {
//     this.signupForm = new FormGroup({
//       'userData': new FormGroup({
//         'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
//         'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this))
//       }),
//       'gender': new FormControl('male'),
//       'hobbies': new FormArray([])
//     });
//     // this.signupForm.get('userData').statusChanges.subscribe(
//     //   (status) => console.log(status)
//     // )
//     // this.signupForm.statusChanges.subscribe(
//     //   (status) => console.log(status)
//     // )
//   }

  
  
//   onSubmit() {
//     console.log(this.signupForm)
//     // console.log(this.signupForm.controls.userData.controls.email.errors.nameIsFrobidden)
//   }
//   onAddHobbies() {
//     const control = new FormControl(null, Validators.required);
//     (<FormArray>this.signupForm.get('hobbies')).push(control);
//   }

//   // creatng custom validator
//   forbiddenName(control: FormControl): { [s: string]: boolean } {
//     if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
//       return { 'nameIsFrobidden': true }
//     }
//     return null
//   }
//   forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
//     const promise = new Promise<any>((resolve, reject) =>{
//       setTimeout(() => {
//         if (this.forbiddenEmails.indexOf(control.value) !== -1) {
//           resolve({'nameIsFrobidden': true });
//         }
//         else {
//           resolve(null);
//         }
//       }, 2500);
//     })
//     return promise;
//   }
// }


