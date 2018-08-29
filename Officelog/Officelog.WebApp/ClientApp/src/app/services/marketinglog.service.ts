import { Injectable } from '@angular/core';
import { IMarketinglog } from '../marketing-log-list/marketing';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from '../shared_filess/service-base';
@Injectable({
  providedIn: 'root'
})
export class MarketinglogService extends ServiceBase<IMarketinglog> {
  
  marketingLogs: IMarketinglog[];
  constructor(private http: HttpClient) {
    super(http, 'api/Marketings');
  }

  intializeObject(): IMarketinglog {
    return{
      id : 0,
      name : "" ,
      contact : 0,
      serviceInterested : "",
      softwareInterested : "",
      Conversion : ""

    }
  }
 
}


