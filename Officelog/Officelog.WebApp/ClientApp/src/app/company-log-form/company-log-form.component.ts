import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';
interface visitorType{
  name: string;
}

@Component({
  selector: 'app-company-log-form',
  templateUrl: './company-log-form.component.html',
  styleUrls: ['./company-log-form.component.css']
})
export class CompanyLogFormComponent implements OnInit {

  blockPreviewYes=false;
  blockPreviewNo=false;

  public userForm: FormGroup;

  visitorType: visitorType[];

  constructor( private fb: FormBuilder ) { 
    this.visitorType = [
      {name: 'First'},
      {name: 'Second or Third'},
      {name: 'Client'},
      {name: 'Franchise'},
  ];
   }

   ngOnInit() {

    this.userForm = this.fb.group({
   clientName: null,
   tradeName: null,
   contact: null,
   email: null,
   queryHandling: null,
   serviceProvided: null,
   visitorType: null,
   usingSoftware:null,
   rateUs: null
   });
 }
;

redioYes(){
 this.blockPreviewYes=true;
 this.blockPreviewNo=false;
}
redioNo(){
 this.blockPreviewYes=false;
 this.blockPreviewNo=true;
}

}
