import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMarketinglog } from '../marketing-log-list/marketing';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionServiceService {
   baseUrl='api/conversions';
  constructor( private http: HttpClient) { }

  getConversions(){
    return this.http.get(`${this.baseUrl}`);
  }
  
}
