import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketinglogService } from "../services/marketinglog.service";
import { IMarketinglog } from '../marketing-log-list/marketing';
import { MessageService } from 'primeng/components/common/api';


@Component({
  selector: 'app-marketing-log-list',
  templateUrl: './marketing-log-list.component.html',
  styleUrls: ['./marketing-log-list.component.css'],
  providers: [MarketinglogService,MessageService]
})

export class MarketingLogListComponent implements OnInit {
  marketinglogs: IMarketinglog[];
  selectedMarketingLog : IMarketinglog;
  id : number;
  //dataSource: IMarketinglog[];
  rowIndex;
  startDate:Date;
  lastDate:Date;
  
   

    

  constructor( private _marketinglogService:MarketinglogService ,
               private _router: Router,
               private messageService: MessageService) { }

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

  showConfirm(rowData) {
    this.rowIndex=rowData;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
}
clear() {
  this.messageService.clear('c');
 } 

onConfirm() {
   this.messageService.clear('c');
  this.selectedMarketingLog=this.rowIndex;
  this._marketinglogService.delete(this.selectedMarketingLog.id).subscribe(() =>{
    this.getMarketingLogList();
  //this.messageService.clear();
});
}

onReject() {
  this.messageService.clear('c');
}
searchByDate(){
  this._marketinglogService.getMarketingListByDate(this.startDate,this.lastDate).subscribe(marketingLogList=>{
    this.marketinglogs=marketingLogList;
  })
}
}
