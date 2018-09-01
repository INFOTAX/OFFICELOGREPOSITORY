import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyReportService } from '../services/company-report.service';
@Component({
  selector: 'app-companydashboard',
  templateUrl: './companydashboard.component.html',
  styleUrls: ['./companydashboard.component.css']
})
export class CompanydashboardComponent implements OnInit {
  report;

  constructor(private _router : Router, private companyReportService : CompanyReportService) { }

  ngOnInit() {
    this.companyReportService.getCompanyReport().subscribe(response=> {
      this.report = response;
      console.log(this.report);
    
    })
      
  }
  companydashboardLog(){

    this._router.navigate(['companydashboard_log']);
   
  }

}
