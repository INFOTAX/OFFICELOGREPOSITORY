
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CompanylogService } from '../services/companylog.service';
import{ICompanylog} from'../company-log-list/company';

@Component({
  selector: 'app-company-log-list',
  templateUrl: './company-log-list.component.html',
  styleUrls: ['./company-log-list.component.css'],
  providers:[CompanylogService]
})
export class CompanyLogListComponent implements OnInit {
  companylogs: ICompanylog[];
  constructor( private _companylogService:CompanylogService , private _router: Router ) {
    
  }

  ngOnInit() {
    this.companylogs=this._companylogService.getCompanylog();
  }


 
  companyLog(){

    this._router.navigate(['company_log']);
    /* this.compLog=true;
     this.markLog=false;*/
  }
}  

