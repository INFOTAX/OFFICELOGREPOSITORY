import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import { CompanylogService } from '../services/companylog.service';
import{ICompanylog} from'../company-log-list/company';

interface CompanyLog{
  tradeName: string,
   contact: string,
   queryHandling: string,
   serviceProvided: string,
   visitorType: string,
   usingSoftware:string,
   rateUs: string,
   reasonForNotInterestedInSoftware: string
}

@Component({
  selector: 'app-company-log-form',
  templateUrl: './company-log-form.component.html',
  styleUrls: ['./company-log-form.component.css']
})
export class CompanyLogFormComponent implements OnInit {
  _id: number;
  blockPreviewYes=false;
  blockPreviewNo=false;
  ifOther=false;
  visitorType: SelectItem[];
  companylogs: ICompanylog;

  public userForm: FormGroup;


  constructor( private fb: FormBuilder,
               private _router: Router,
               private _activatedRoute: ActivatedRoute,
               private _companylogService:CompanylogService ) { 
    
   }
   companyLogList(){

    this._router.navigate(['company_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }

   ngOnInit() {
    
    /*this._activatedRoute.paramMap.subscribe( parameterMap =>{
      const id = + parameterMap.get('id');
     this.getLogList(id);

    });*/

    this.visitorType = [
      {label: 'First', value:'First'},
      {label: 'Second or Third', value: 'Second or Third'},
      {label: 'Client', value:'Client'},
      {label: 'Franchise', value:'Franchise'}
  ];

    this.userForm = this.fb.group({
   tradeName: null,
   contact: null,
   queryHandling: null,
   serviceProvided: null,
   visitorType: null,
   usingSoftware:null,
   rateUs: null,
   reasonForNotInterestedInSoftware: null
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
otherReason(){
  this.ifOther=true;
}
closeOtherReason(){
  this.ifOther=false;
}
}
