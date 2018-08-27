import { Injectable } from '@angular/core';
import { IMarketinglog } from '../marketing-log-list/marketing';

@Injectable({
  providedIn: 'root'
})
export class MarketinglogService {

  constructor() { }

  getCompanylog(): IMarketinglog[]{

    return[
      {"name":"Ankita", "contact": 12344456, "serviceIntrested":"Yes","softwareIntrested":"Yes","Conversion":"NotAchived"},
      {"name":"Vishal", "contact": 9123654, "serviceIntrested":"NO","softwareIntrested":" Yes","Conversion":"Achived"},
      {"name":"Trishan", "contact": 8123654, "serviceIntrested":"Yes","softwareIntrested":"Yes","Conversion":"Achived"},
      {"name":"Ajeet", "contact": 7123654, "serviceIntrested":"No","softwareIntrested":"Yes","Conversion":"Achived"},
      {"name":"Avinash", "contact": 6123654, "serviceIntrested":"No","softwareIntrested":"No","Conversion":"Achived"},
      {"name":"Rakesh", "contact": 5123654, "serviceIntrested":"Yes","softwareIntrested":"No","Conversion":"NotAchived"},
    
    ];
  }

}
