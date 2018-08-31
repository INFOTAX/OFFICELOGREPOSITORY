import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SelectItem} from 'primeng/components/common/selectitem';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketinglogService } from "../services/marketinglog.service";
import { IMarketinglog } from '../marketing-log-list/marketing';
//import { MessageService } from 'primeng/api';



export interface ServiceItems {
  serviceType: string;
  price: number;
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
  //items;
  id: number;
  marketingLog: IMarketinglog;

  public userForm: FormGroup;





  constructor(private fb: FormBuilder, private router: Router, 
              private route: ActivatedRoute,
              private marketingLogService: MarketinglogService,
              //private messageService: MessageService
             ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    this.getMarketingLog(this.id);
    });

    this.userForm = this.newForm();

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

  private getMarketingLog(id):void{
    this.marketingLogService.getOne(id)
    .subscribe((marketingLog:IMarketinglog)=> this.onMarketingLogRetrieved(marketingLog)
    );
  }

  newForm():FormGroup{
    return this.fb.group({
      id: 0,
      name: [''],
      contactNumber: 0,
      softwareInterested: [],
      rateUs: [''],
      serviceInterested: [],
      rateUsForNo: [''],
      currentScenario: [''],
      suggestionForNo: [''],
      suggestionForYes: [''],
      area: [''],
      date:new Date(),
      serviceItems : this.fb.array([])
    });
  }

  saveMarketingLog():void {

    if (this.userForm.valid) {
  
        let p = Object.assign({}, this.marketingLog, this.userForm.value);
  
         this.marketingLogService.save(p, this.id)
            .subscribe(si => this.onSaveComplete());
    }
  
  
    else if (!this.userForm.dirty) {
        this.onSaveComplete();
    }
  }
  private onSaveComplete(){
    const displayMsg = this.id == 0 ? 'Submitted' : 'Updated';
    // this.messageService.add({
    //   key : 'tr',
    //   severity : 'success',
    //   summary : 'Success Message',
    //   detail : 'Order ' + displayMsg
    // })
    this.router.navigate(['marketing_log_list']);
  }

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

  
  get serviceTypeItems(): FormArray {
    return <FormArray>this.userForm.get('serviceItems');
  }

  addNewServiceType(type : HTMLInputElement,price : HTMLInputElement){
    var serviceItem : ServiceItems = {
      serviceType : String(type.value),
      price : Number(price.value)
    }
    this.addServiceLine(serviceItem)
  }

  deleteServiceType(index: number) {
    this.serviceTypeItems.removeAt(index);
  }

  addServiceLine(serviceItem : ServiceItems):void{
    this.serviceTypeItems.push(this.buildServiceType(serviceItem));
  }
  private buildServiceType(serviceItem: ServiceItems): FormGroup {
    return this.fb.group({
        serviceType: [serviceItem.serviceType],
        price : [serviceItem.price]
      
    })
  }

  
  otherReason() {
    this.ifOther = true;
  }
  closeOtherReason() {
    this.ifOther = false;
  }
  marketingLogList() {

    this.router.navigate(['/marketing_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
 
  private onMarketingLogRetrieved(marketingLog : IMarketinglog) :void{
    this.marketingLog = marketingLog;

    if (this.marketingLog.id == 0) {
      this.userForm = this.newForm();
    
  }
  
    else{
      this.userForm.patchValue({

      id: this.marketingLog.id,
      name: this.marketingLog.name,
      contactNumber: this.marketingLog.contactNumber,
      softwareInterested: this.marketingLog.softwareInterested,
      rateUs: this.marketingLog.rateUs,
      serviceInterested: this.marketingLog.serviceInterested,
      rateUsForNo: this.marketingLog.rateUsForNo,
      currentScenario: this.marketingLog.currentScenario,
      suggestionForNo: this.marketingLog.suggestionForNo,
      suggestionForYes: this.marketingLog.suggestionForYes,
      area: this.marketingLog.area,
      date: this.marketingLog.date

      });
      for (let i = 0; i < this.marketingLog.serviceItems.length; i++) {
        this.serviceTypeItems.push(this.buildServiceType(this.marketingLog.serviceItems[i]));

    }
    }
  }

}
