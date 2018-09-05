import { Component, OnInit } from '@angular/core';
import { AdminConsolidatedReportingService } from '../services/admin-consolidated-reporting.service';

@Component({
  selector: 'app-admin-consolidated-marketing-reporting',
  templateUrl: './admin-consolidated-marketing-reporting.component.html',
  styleUrls: ['./admin-consolidated-marketing-reporting.component.css']
})
export class AdminConsolidatedMarketingReportingComponent implements OnInit {

  reports;
  conversionReports;


  constructor(private consolidatedService: AdminConsolidatedReportingService,
              ) { }

  ngOnInit() {
  

   this.consolidatedService.getMarketingReport().subscribe(res=>{
     this.reports=res;
     console.log(this.reports)
   })
  this.consolidatedService.getConversionReport().subscribe(res=>{
     this.conversionReports=res;
  })

}
}