import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { CompanyReportService } from '../../../services/company-report.service';
@Component({
  selector: 'app-companydashboard',
  templateUrl: './companydashboard.component.html',
  styleUrls: ['./companydashboard.component.css']
})
export class CompanydashboardComponent implements OnInit {
  report;
 
  visitData: any;
  dataBar:any;
  tv1:number;
  tv2:number;
  tv3:number;
  tv4:number;
  tv5:number;
  queryrating;
  qr1:number;
  qr2:number;
  qr3:number;
  qr4:number;
  
  private opt: any = {
    legend: { position: 'bottom'}
  };

  constructor(private _router : Router, private companyReportService : CompanyReportService) { 

    /*this.visitData = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
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
      };*/
      this.dataBar = {
        labels: ['Franchise', 'First', 'Second or third', 'Client', 'Other'],
        datasets: [
          {
            label: '2016 Data of Total Vistor',
            backgroundColor: '#841e38',
            borderColor: '#8e407f',
            fill: false,
            data: [35, 69, 30, 61, 36]
        },
            {
                label: '2017 Data of Total Vistor',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                fill: false,
                data: [65, 59, 80,55, 40]
            },
            {
              label: '2018 Data of Total Vistor',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              fill:false,
              data: [28, 48, 40, 19,90],
          }
        ]
    }

  }







  ngOnInit() {
    this.companyReportService.getCompanyReport().subscribe(response=> {
      this.report = response;
      this.tv1=this.report.totalVisits;
      this.tv2=this.report.totalClientVisits;
      this.tv3=this.report.totalFranchiseVisits;
      this.tv4=this.report.totalFirstVisits;
      this.tv5=this.report.totalSecondOrThirdVisits;
     this. qr1=this.report.totalBadQueryRating;
     this. qr2=this.report.totalGoodQueryRating;
     this. qr3=this.report.totalVeryGoodQueryRating;
     this. qr4=this.report.totalExcellentQueryRating;

     this.getChartForTotalVisitorType(this.report);
     this.getChartForTotalVisitorType(this.report);
      console.log(this.report);
      (error : any) => {
        alert('TimeOut')
      } 
    })
   
  }

  /*dashbord route start*/
  companydashboardLog(){

    this._router.navigate(['companydashboard_log']);
   
  }
  getChartForTotalVisitorType(visitData){
    this.report=visitData;
    this.visitData = {
      labels: ['A','B','C','D','E'],
      datasets: [
          { label: 'Total Visitor Data',
              data: [this.tv1, this.tv2, this.tv3, this.tv4, this.tv5],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB"
              ], 
             
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB"
              ]
          }]    
      };

  }

}
