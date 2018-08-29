import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketinglogService } from "../services/marketinglog.service";
import { IMarketinglog } from '../marketing-log-list/marketing';

export interface MarketingLog {
  name: string;
  tradeName: string;
  contact: number;
  usingSoftware: string;
  interestedUsingService: string;
  items: ServiceItems[];
  reasonForNotInterestedInSoftware: string;
}

export interface ServiceItems {
  serviceType: string;
  rate: number;
}


@Component({
  selector: 'app-marketing-log-form',
  templateUrl: './marketing-log-form.component.html',
  styleUrls: ['./marketing-log-form.component.css']
})
export class MarketingLogFormComponent implements OnInit {


  interrestedInService: SelectItem[];
  currentScenario: SelectItem[];
  blockPreviewYes = false;
  blockPreviewNo = false;
  interested_Yes = false;
  interested_No = false;
  ifOther = false;
  items;
  id: number;
  marketingLog: IMarketinglog;

  public userForm: FormGroup;





  constructor(private fb: FormBuilder, private _router: Router, private route: ActivatedRoute,
    private marketingLogService: MarketinglogService) {


  }


  ngOnInit() {
   /* this.route.paramMap.subscribe(params => {
      this.id = params['id'];
      this.getMarketingLog(this.id);
    });*/

    this.userForm = this.fb.group({
      tradeName: null,
      contact: null,
      usingSoftware: null,
      rateUs: null,
      interestedUsingService: null,
      reasonForNotInterestedInSoftware: null,
      serviceType: null,
      rate: null,
      items: this.fb.array([this.createItem()])
    });

    this.interrestedInService = [
      { label: 'Accounting', value: 'Accounting' },
      { label: 'Income Tax Filing', value: 'Income Tax Filing' },
      { label: 'TDS Filing', value: 'TDS Filing' },
      { label: 'GST Filing', value: 'GST Filing' },
      { label: 'Consultancy', value: 'Consultancy' },
      { label: 'Company related', value: 'Company related' },
      { label: 'Loan Documentation', value: 'Loan Documentation' }
    ];
    this.currentScenario = [
      { label: 'CA', value: 'CA' },
      { label: 'ADVOCATE', value: 'ADVOCATE' },
      { label: 'ACCOUNTANT', value: 'ACCOUNTANT' },
      { label: 'SELF', value: 'SELF' },
      { label: 'UNREGISTERED', value: 'UNREGISTERED' }
    ];


  }

  /*private getMarketingLog(id: number) {
    this.marketingLogService.getMarketingLogById(id)
      .subscribe(res => this.marketingLog = res);
  }*/

  redioYes() {
    this.blockPreviewYes = true;
    this.blockPreviewNo = false;
  }
  redioNo() {
    this.blockPreviewYes = false;
    this.blockPreviewNo = true;
  }
  interestedYes() {
    this.interested_Yes = true;
    this.interested_No = false;
  }
  interestedNo() {
    this.interested_No = true;
    this.interested_Yes = false;
  }

  addNewServiceType() {
    this.items = this.userForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  deleteServiceType(index: number) {
    const control = <FormArray>this.userForm.controls['items'];
    control.removeAt(index);
  }

  createItem(): FormGroup {
    return this.fb.group({
      rate: '',
      serviceType: ''
    });

  }
  otherReason() {
    this.ifOther = true;
  }
  closeOtherReason() {
    this.ifOther = false;
  }
  marketingLogList() {

    this._router.navigate(['marketing_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }

}
