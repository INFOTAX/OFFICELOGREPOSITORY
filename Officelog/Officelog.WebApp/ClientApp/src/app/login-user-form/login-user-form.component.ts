
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserlogService } from '../services/userlog.service';
import { IUserlog } from './userlogin';


@Component({
  selector: 'app-login-user-form',
  templateUrl: './login-user-form.component.html',
  styleUrls: ['./login-user-form.component.css']
})
export class LoginUserFormComponent implements OnInit {
  userProfileForm: FormGroup;
  userlogs:IUserlog;
  id: number;

  constructor(private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userlogService: UserlogService) { }

  ngOnInit() {
 
    this.userProfileForm = this.newForm();
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getUserLog(this.id);

    });
  }
  newForm(): FormGroup {
    return this.fb.group({
      id: 0,
      name: [''],
      contactNumber: [''],
      designation: ['']
      
    });
  }
  private getUserLog(id: number) {
    this._userlogService.getOne(id).subscribe( (userlogs: IUserlog) => this.onUserLogRetrieved(
      userlogs));

   
      }
      private onUserLogRetrieved(userlogs: IUserlog): void {

        this.userlogs = userlogs;
        if (this.userlogs.id == 0) {
          this.userProfileForm = this.newForm();
         
        }
        else{
          this.userProfileForm.patchValue({
    
            id:this.userlogs.id,
            name:this.userlogs.name,
            contactNumber:this.userlogs.contactNumber,
            designation:this.userlogs.designation
          })

        }
      }

      saveUserLog(): void {

        if (this.userProfileForm.valid) {
    
          let userlogsToSave = Object.assign({}, this.userlogs, this.userProfileForm.value);
    
          this._userlogService.save(userlogsToSave, this.id).subscribe(() => {});
          this.onSaveComplete();
        }
    
    
        else if (!this.userProfileForm.dirty) {
          this.onSaveComplete();
        }
      }
    
      private onSaveComplete(): void {
        const displayMsg = this.id == 0 ? 'Saved' : 'Updated';

        this._router.navigate(['/user_log']);
    
    
      }

  userLog(){

    this._router.navigate(['user_log']);
    
  }

}
