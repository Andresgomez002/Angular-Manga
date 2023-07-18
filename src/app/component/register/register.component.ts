import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup = this.fb.group({
    nombre: [
      '',
      [
        Validators.required
      ]
    ],
    email:[
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password:[
      '',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ]
  })
constructor(private fb: FormBuilder){}
register(){
console.group('registerform');
console.info(this.registerForm.value);
console.info(this.registerForm.valid);
console.groupEnd();
}
}
