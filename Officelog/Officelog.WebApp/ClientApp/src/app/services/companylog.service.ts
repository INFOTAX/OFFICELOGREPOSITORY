import { Injectable } from '@angular/core';
import{ICompanylog} from'../company-log-list/company';
import { Observable } from "../../../node_modules/rxjs";
import { HttpClient } from "../../../node_modules/@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanylogService {

  baseurl: string='assets/Data/company-log-list-data.json';
  private logList: ICompanylog[];

  constructor( private http: HttpClient) { 
    
  }


    getCompanylog(): Observable<ICompanylog[]>{
      return this.http.get<ICompanylog[]>(this.baseurl);
    }

    getLogById(id: number): ICompanylog{
      return this.logList.find(user=> user.id === id);
  }
  }
    
     

