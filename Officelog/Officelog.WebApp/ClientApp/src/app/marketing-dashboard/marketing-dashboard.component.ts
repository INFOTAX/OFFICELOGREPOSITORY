import { Component, OnInit, Input } from '@angular/core';
import { MarketingConversionReportService } from '../services/marketing-conversion-report.service';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-marketing-dashboard',
  templateUrl: './marketing-dashboard.component.html',
  styleUrls: ['./marketing-dashboard.component.css']
})
export class MarketingDashboardComponent implements OnInit {
  
  marketingReport;
  conversionReport;
  data:any;
  options:any;


  constructor(private marketingAndConversionService : MarketingConversionReportService) { 
    this.data = {
      labels: ['Total Conversations','Total Software Interested','Total Software Interested'],
      datasets: [
          {
              data: [],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      }
      this.options={
        
        legend: {
          labels:{
              fontSize: 18,
              fontColor: 'black',
              padding: 20,
          },
            position: 'left',
        }}
   }

  ngOnInit() {
    this.getMarketingReport();
    this.getConversionReport();
  }

  getMarketingReport(){
    this.marketingAndConversionService.getMarketingReports().subscribe(res => {this.marketingReport = res;
      console.log(this.marketingReport);
    });
  }

  getConversionReport(){
    this.marketingAndConversionService.getConversionReports().subscribe(res => {
      this.conversionReport = res;
      console.log(this.conversionReport);
      (error : any) => {
        alert('TimeOut')
      } 
    })
  }

}
