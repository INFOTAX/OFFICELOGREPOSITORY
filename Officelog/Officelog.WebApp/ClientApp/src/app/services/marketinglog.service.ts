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
      name: "",
      contactNumber: 0,
      softwareInterested: true,
      rateUs: "",
      serviceInterested: true,
      rateUsForNo: "",
      currentScenario: "",
      suggestionForNo: "",
      suggestionForYes: "",
      area: "",
      date:new Date,
      Conversion:"",
      id : 0,
      serviceItems:[]

    }
  }
 
}


