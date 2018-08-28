import { Injectable } from '@angular/core';
import { IMarketinglog } from '../marketing-log-list/marketing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketinglogService {
  baseUrl: string = "assets/Data/marketing-log.json";
  marketingLogs: IMarketinglog[];
  marketingLog : IMarketinglog;
  constructor(private http: HttpClient) { }

  getMarketingLog(): Observable<IMarketinglog[]> {
    return this.http.get<IMarketinglog[]>(this.baseUrl);

  }

  getMarketingLogById(id: number): Observable<IMarketinglog> {
    if (id == 0) {
      return of(this.initializeObject());
    }
    if (this.marketingLogs) {
      id = this.marketingLogs.findIndex(it => it.id === this.marketingLog.id);
        
        // return of(foundItem);
        return this.http.get<IMarketinglog>(`${this.baseUrl}/${id}`);
      
    }


   
  }

  initializeObject(): IMarketinglog {
    return {
      id: 0,
      name: '',
      contact: 0,
      serviceInterested: '',
      softwareInterested: '',
      Conversion: '',
    }
  }
}
