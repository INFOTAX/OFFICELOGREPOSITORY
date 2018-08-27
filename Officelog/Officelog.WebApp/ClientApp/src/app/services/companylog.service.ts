import { Injectable } from '@angular/core';
import{ICompanylog} from'../company-log-list/company';

@Injectable({
  providedIn: 'root'
})
export class CompanylogService {

  constructor() { 
    
  }

  getCompanylog(): ICompanylog[]{

    return[
      {"name":"Ankita", "contact": 12344456, "typeOfQuery":"good","serviceRating":"good","visitorType":"First"},
      {"name":"Vishal", "contact": 9123654, "typeOfQuery":" very good","serviceRating":" very good","visitorType":"Second or Third"},
      {"name":"Trishan", "contact": 8123654, "typeOfQuery":"bad","serviceRating":" very good","visitorType":"Client"},
      {"name":"Ajeet", "contact": 7123654, "typeOfQuery":"excellent","serviceRating":"good","visitorType":"Client"},
      {"name":"Avinash", "contact": 6123654, "typeOfQuery":"good","serviceRating":"bad","visitorType":"Franchise"},
      {"name":"Rakesh", "contact": 5123654, "typeOfQuery":"very good","serviceRating":"excellent","visitorType":"First"},
    
    ];
  }
  }
    
     

