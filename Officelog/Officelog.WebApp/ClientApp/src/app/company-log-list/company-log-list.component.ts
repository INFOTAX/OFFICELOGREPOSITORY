
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CompanylogService } from '../services/companylog.service';
import{ICompanylog} from'../company-log-list/company';

@Component({
  selector: 'app-company-log-list',
  templateUrl: './company-log-list.component.html',
  styleUrls: ['./company-log-list.component.css'],
  providers:[CompanylogService]
})
export class CompanyLogListComponent implements OnInit {
  @Input() companylogs: ICompanylog[];
  @Input() selectedCompanyLog:ICompanylog;
  id :number;


  constructor( private _companylogService:CompanylogService ,
               private _router: Router ) {
    
  }

  ngOnInit() {
    this.getCompanyLogList();
  }

  getCompanyLogList(){
    this._companylogService.getAll().subscribe(companyLogList=>{
      this.companylogs=companyLogList;
    });
  }
 companyLog(){

    this._router.navigate(['company_log']);
    /* this.compLog=true;
     this.markLog=false;*/
  }
  onAddc(){
    this.id=0;
    this._router.navigate(['/company_log',this.id])
  }
  onXYSelect(event){
    this.id = event.data.id;
    console.log(this.id)
    this._router.navigate(['/company_log',this.id])
  }
}  

