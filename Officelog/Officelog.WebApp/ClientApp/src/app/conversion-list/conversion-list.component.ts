import { Component, OnInit } from '@angular/core';
import { MarketinglogService } from '../services/marketinglog.service';


@Component({
  selector: 'app-conversion-list',
  templateUrl: './conversion-list.component.html',
  styleUrls: ['./conversion-list.component.css']
})
export class ConversionListComponent implements OnInit {
   
  conversionList;

  constructor(private marketingLogService: MarketinglogService) { }

  ngOnInit() {
    this.getConversionList();
  }
getConversionList(){
  this.marketingLogService.getConversions().subscribe(response=>{
    this.conversionList=response
  });
}
}
