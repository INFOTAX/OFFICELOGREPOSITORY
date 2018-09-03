import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ChartModule} from 'primeng/chart';
@Component({
  selector: 'app-companydashboard',
  templateUrl: './companydashboard.component.html',
  styleUrls: ['./companydashboard.component.css']
})
export class CompanydashboardComponent implements OnInit {
  totalVisit=1200;
  serviceIntrested=890;
  queryIntrested=270;
  data: any;
  dataBar:any;
  private options: any = {
    legend: { position: 'right' }
  };
  private opt: any = {
    legend: { position: 'bottom'}
  };

  constructor(private _router : Router) {
   
    this.data = {
      labels: ['Bad','Good','Very Good','Excellent'],
      datasets: [
          {
              data: [30,20,60, 100],
              backgroundColor: [
                  "#585052",
                  "#36A2EB",
                  "#FFCE56",
                  "#62E271"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#62E271"
              ]
          }]    
      }; 



      this.dataBar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '2016 Data of Total Vistor',
            backgroundColor: '#841e38',
            borderColor: '#8e407f',
            fill: false,
            data: [35, 69, 30, 61, 36, 45, 40]
        },
            {
                label: '2017 Data of Total Vistor',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                fill: false,
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: '2018 Data of Total Vistor',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              fill:false,
              data: [28, 48, 40, 19, 86, 27, 90],
          }
        ]
    }
   }

  ngOnInit() {



  }
  companydashboardLog(){

    this._router.navigate(['companydashboard_log']);
   
  }

}
