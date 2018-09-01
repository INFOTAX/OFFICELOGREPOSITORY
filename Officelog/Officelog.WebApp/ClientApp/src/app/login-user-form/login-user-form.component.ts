
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-user-form',
  templateUrl: './login-user-form.component.html',
  styleUrls: ['./login-user-form.component.css']
})
export class LoginUserFormComponent implements OnInit {
  userProfileForm: FormGroup;
  constructor(private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userProfileForm = this.newForm();
  }
  newForm(): FormGroup {
    return this.fb.group({
      id: 0,
      userName: [''],
      userContact: [''],
      userDesigination: ['']
      
    });
  }
  userLog(){

    this._router.navigate(['user_log']);
    
  }

}
