import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

export interface MarketingLog {
  name: string;
}
export interface interrestedInSoftware{
  name: string
}
export interface currentScenario{
  name: string
}

@Component({
  selector: 'app-marketing-log-form',
  templateUrl: './marketing-log-form.component.html',
  styleUrls: ['./marketing-log-form.component.css']
})
export class MarketingLogFormComponent implements OnInit {


  blockPreviewYes=false;
  blockPreviewNo=false;
  interested_Yes=false;
  interested_No=false;

  public userForm: FormGroup;

  visitorType: visitorType[];
  interrestedInSoftware: interrestedInSoftware[];
  currentScenario: currentScenario[];

  constructor( private fb: FormBuilder ) { 
    this.visitorType = [
      {name: 'First'},
      {name: 'Second or Third'},
      {name: 'Client'},
      {name: 'Franchise'},
  ];

    this.interrestedInSoftware=[
      {name: 'Accounting'},
      {name: 'Income Tax Filing'},
      {name: 'TDS Filing'},
      {name: 'GST Filing'},
      {name: 'Consultancy'},
      {name: 'Company related'},
      {name: 'Loan Documentation'}
    ];
    this.currentScenario=[
      {name: 'CA'},
      {name: 'ADVOCATE'},
      {name: 'ACCOUNTANT'},
      {name: 'SELF'},
      {name: 'UNREGISTERED'}
    ];
   }


  ngOnInit() {

    this.userForm= new FormGroup({
        'moreService': new FormArray([])
    });

    this.userForm = this.fb.group({
      clientName: null,
      tradeName: null,
      contact: null,
      email: null,
      queryHandling: null,
      serviceProvided: null,
      visitorType: null,
      usingSoftware:null,
      rateUs: null,
      interestedUsingService: null
      });
  }

  redioYes(){
    this.blockPreviewYes=true;
    this.blockPreviewNo=false;
  }
  redioNo(){
    this.blockPreviewYes=false;
    this.blockPreviewNo=true;
  }
  interestedYes(){
    this.interested_Yes=true;
    this.interested_No=false;
  }
  interestedNo(){
    this.interested_No=true;
    this.interested_Yes=false;
  }

  addNewServiceType(){
    const control=new FormControl(null);
    (<FormArray>this.userForm.get('moreService')).push(control);
  }

}
