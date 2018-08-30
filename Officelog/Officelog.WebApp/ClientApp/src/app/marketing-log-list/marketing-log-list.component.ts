import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketinglogService } from "../services/marketinglog.service";
import { IMarketinglog } from '../marketing-log-list/marketing';
@Component({
  selector: 'app-marketing-log-list',
  templateUrl: './marketing-log-list.component.html',
  styleUrls: ['./marketing-log-list.component.css'],
  providers: [MarketinglogService]
})
export class MarketingLogListComponent implements OnInit {
  marketinglogs: IMarketinglog[];
  selectedMarketingLog : IMarketinglog;
  id : number
  
   

    

  constructor( private _marketinglogService:MarketinglogService ,
               private _router: Router) { }

  ngOnInit() {
    this.getMarketingLogList();
  }

  getMarketingLogList(){
        this._marketinglogService.getAll().subscribe(marketingLogList=>{
          this.marketinglogs=marketingLogList;
        });
  }
  marketingLog(){
    this._router.navigate(['marketing_log']);
    // this.compLog=false;
    // this.markLog=true;
  }
onAddm(){
  this.id=0;
  this._router.navigate(['/marketing_log',this.id])
}
  onRowSelect(event) { 
    this.id = event.data.id;
    console.log(this.id)
    this._router.navigate(['/marketing_log',this.id])
  }
 
}
