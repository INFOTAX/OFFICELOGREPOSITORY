import { Injectable } from '@angular/core';
import { ICompanylog } from '../company-log-list/company';
import { Observable } from "../../../node_modules/rxjs";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { ServiceBase } from '../shared/service-base';


@Injectable({
  providedIn: 'root'
})
export class CompanylogService extends ServiceBase<ICompanylog>{




  logList: ICompanylog[];

  constructor(private http: HttpClient) {
    super(http, 'api/Companies')
  }

  intializeObject(): ICompanylog {
    return {
      id: 0,
      name: "",
      contactNumber: "",
      queryHandling: "",
      serviceProvided: "",
      visitorType: "",
      softwareInterested: true,
      rateUs: "",
      rateUsForNo: "",
      suggestionForYes: "",
      suggestionForNo: "",
      date: new Date()
    }
  }

  getCompaniesByDate(fromDate : Date,toDate : Date):Observable<ICompanylog[]>{
    return this.http.get<ICompanylog[]>(`${this.baseUrl}?fromDate=${fromDate.toDateString()}&toDate=${toDate.toDateString()}`);
  }

}



