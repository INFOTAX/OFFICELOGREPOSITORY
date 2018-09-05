import { Component, OnInit } from '@angular/core';
import { AdminConsolidatedReportingService } from '../services/admin-consolidated-reporting.service';

@Component({
  selector: 'app-admin-consolidated-company-reporting',
  templateUrl: './admin-consolidated-company-reporting.component.html',
  styleUrls: ['./admin-consolidated-company-reporting.component.css']
})
export class AdminConsolidatedCompanyReportingComponent implements OnInit {

  companyReportData;

  constructor(private consolidatedService: AdminConsolidatedReportingService) { }

  ngOnInit() {
    this.getCompanyReports();
  }
 getCompanyReports(){
   this.consolidatedService.getCompanyReport().subscribe(res=>{
     this.companyReportData=res;
   })
 }
}
