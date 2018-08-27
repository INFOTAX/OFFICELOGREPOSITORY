import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketinglogService } from '../services/marketinglog.service';
import { IMarketinglog } from '../marketing-log-list/marketing';
@Component({
  selector: 'app-marketing-log-list',
  templateUrl: './marketing-log-list.component.html',
  styleUrls: ['./marketing-log-list.component.css'],
  providers: [MarketinglogService]
})
export class MarketingLogListComponent implements OnInit {
  marketinglogs: IMarketinglog[];
  constructor( private _marketinglogService:MarketinglogService , private _router: Router) { }

  ngOnInit() {
    this.marketinglogs=this._marketinglogService.getCompanylog();
  }
  marketingLog(){
    this._router.navigate(['marketing_log']);
    // this.compLog=false;
    // this.markLog=true;
  }
}
