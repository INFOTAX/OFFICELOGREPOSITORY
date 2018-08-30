import { Injectable } from '@angular/core';
import{ICompanylog} from'../company-log-list/company';
import { Observable } from "../../../node_modules/rxjs";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { ServiceBase } from '../shared_filess/service-base';

@Injectable({
  providedIn: 'root'
})
export class CompanylogService extends ServiceBase<ICompanylog>{

  intializeObject(): ICompanylog {
    throw new Error("Method not implemented.");
  }
  
   logList: ICompanylog[];

  constructor( private http: HttpClient) { 
    super(http, 'api/Companies')
  }

  initializeObject(): ICompanylog{
    return{
      id  :0, 
      name:"",
      contactNumber:"",
      queryHandling:"",
      serviceProvided :"",
      visitorType:"",
      softwareInterested:true,
      rateUs:"",
      suggestionForYes:"",
      suggestionForNo:"",
      date: new Date()
    } }
  
  }
    
     

