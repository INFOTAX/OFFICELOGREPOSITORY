import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-dashboard',
  templateUrl: './marketing-dashboard.component.html',
  styleUrls: ['./marketing-dashboard.component.css']
})
export class MarketingDashboardComponent implements OnInit {

  TotalVisits=100;
  QuearyHandled=51;
  SoftwareInterested=60;

  constructor() { }

  ngOnInit() {
  }

}
