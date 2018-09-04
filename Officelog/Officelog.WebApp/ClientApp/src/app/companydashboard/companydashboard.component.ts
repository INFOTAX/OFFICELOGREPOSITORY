import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyReportService } from '../services/company-report.service';
import {ChartModule} from 'primeng/chart';
@Component({
  selector: 'app-companydashboard',
  templateUrl: './companydashboard.component.html',
  styleUrls: ['./companydashboard.component.css']
})
export class CompanydashboardComponent implements OnInit {
  report;
  visitData: any;
  dataBar:any;
  private opt: any = {
    legend: { position: 'bottom'}
  };

  constructor(private _router : Router, private companyReportService : CompanyReportService) { 

    this.visitData = {
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
      };
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
    
      console.log(this.report);
    
    })
      
  }
  companydashboardLog(){

    this._router.navigate(['companydashboard_log']);
   
  }

}
