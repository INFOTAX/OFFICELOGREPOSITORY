import { Component, OnInit } from '@angular/core';
import { ConversionServiceService } from '../services/conversion-service.service';



@Component({
  selector: 'app-conversion-list',
  templateUrl: './conversion-list.component.html',
  styleUrls: ['./conversion-list.component.css']
})
export class ConversionListComponent implements OnInit {
   
  conversionList;

  constructor(private conversionService: ConversionServiceService) { }

  ngOnInit() {
    this.getConversionList();
  }
getConversionList(){
  this.conversionService.getConversions().subscribe(response=>{
    this.conversionList=response
  });
}
}
