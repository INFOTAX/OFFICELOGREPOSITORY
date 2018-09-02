import { Component, OnInit } from '@angular/core';
import { MarketingConversionReportService } from '../services/marketing-conversion-report.service';

@Component({
  selector: 'app-marketing-dashboard',
  templateUrl: './marketing-dashboard.component.html',
  styleUrls: ['./marketing-dashboard.component.css']
})
export class MarketingDashboardComponent implements OnInit {

  
  marketingReport;
  conversionReport;

  constructor(private marketingAndConversionService : MarketingConversionReportService) { }

  ngOnInit() {
    this.getMarketingReport();
    this.getConversionReport();
  }

  getMarketingReport(){
    this.marketingAndConversionService.getMarketingReports().subscribe(res => this.marketingReport = res );
  }

  getConversionReport(){
    this.marketingAndConversionService.getConversionReports().subscribe(res => {
      this.conversionReport = res;
      (error : any) => {
        alert('TimeOut')
      } 
    })
  }

}
