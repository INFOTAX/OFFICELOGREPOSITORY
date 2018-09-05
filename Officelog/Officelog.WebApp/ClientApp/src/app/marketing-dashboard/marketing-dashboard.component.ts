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
  
  x:number;
  y:number;
  z:number;
  


  constructor(private marketingAndConversionService : MarketingConversionReportService) { 
    
   }
   

  ngOnInit() {
    this.getMarketingReport();
    this.getConversionReport();
   

    
    this.data = { 
      labels: ['Total Conversions','Total Software Interested','Total Software Interested'],
      datasets: [
          { 
              data: [this.x,this.y,this.z],
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


  getMarketingReport(){
    this.marketingAndConversionService.getMarketingReports().subscribe(res => {this.marketingReport = res;
      console.log(this.marketingReport.totalSoftwareInterested);
      console.log(this.marketingReport.totalServiceInterested);
      this.y=this.marketingReport.totalSoftwareInterested;
      this.z=this.marketingReport.totalServiceInterested
    });
    
  }

  getConversionReport(){
    this.marketingAndConversionService.getConversionReports().subscribe(res => {
      this.conversionReport = res;
      this.x=this.conversionReport.totalConversions;
      
      console.log(this.x,this.y,this.z);
      
      (error : any) => {
        alert('TimeOut')
      } 
    })
   
  }
 

}
