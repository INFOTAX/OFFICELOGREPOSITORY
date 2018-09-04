
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  userSignForm: FormGroup;
  constructor(private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this. userSignForm = this.newForm();
  }
  newForm(): FormGroup {
    return this.fb.group({
      id: 0,
      name: [''],
      password: ['']
     
      
    });
  }
    userSignIn(){

      this._router.navigate(['user_sign']);
      
    
  }

}
