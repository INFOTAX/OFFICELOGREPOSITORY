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
  
  options:any;
  
  x:number;
  y:number;
  z:number;
  data : any;
  


  constructor(private marketingAndConversionService : MarketingConversionReportService) { 
    
   }
   

  ngOnInit() {
    this.getMarketingReport();
    this.getConversionReport();
   

    
   }


  getMarketingReport(){
    this.marketingAndConversionService.getMarketingReports().subscribe(res => 
      {
      this.marketingReport = res;
      this.y=this.marketingReport.totalSoftwareInterested;
      this.z=this.marketingReport.totalServiceInterested;
    });
    
  }

  getConversionReport(){
    this.marketingAndConversionService.getConversionReports().subscribe(res => {
      this.conversionReport = res;
      this.x=this.conversionReport.totalConversions;
<<<<<<< HEAD
      console.log(this.x,this.y,this.z);
      this.conversionReport = { 
        labels: ['Total Conversions','Total Software Interested','Total Service Interested'],
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
      
=======
      this.getPieChartForConversion(this.conversionReport);
>>>>>>> c11266b342cc4e445a2489e535d13ecd560e9c2f
      console.log(this.x);
      
      (error : any) => {
        alert('TimeOut')
      } 
    })
   
  }
 
  getPieChartForConversion(conversionReport){
    this.conversionReport = conversionReport;
    this.conversionReport = { 
      labels: ['Total Conversions'],
      datasets: [
          { 
              data: [this.x],
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

}
