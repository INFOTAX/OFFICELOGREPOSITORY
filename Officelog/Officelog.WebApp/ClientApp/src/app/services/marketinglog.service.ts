import { Injectable } from '@angular/core';
import { IMarketinglog } from '../marketing-log-list/marketing';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from '../shared_filess/service-base';
import { Observable } from "../../../node_modules/rxjs";
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
  getMarketingListByDate(startDate : Date,lastDate : Date):Observable<IMarketinglog[]>{
    return this.http.get<IMarketinglog[]>(`${this.baseUrl}?fromDate=${startDate.toDateString()}&toDate=${lastDate.toDateString()}`);
  }

  conversion(marketingLog : IMarketinglog,id: number) : Observable<IMarketinglog>{
    return this.http.patch<IMarketinglog>(`${this.baseUrl}/converted?id=${id}`,marketingLog);
  }

  // getConversions(){
  //   return this.http.get(`${this.baseUrl}/converted`);
  // }
 
}


