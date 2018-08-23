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
      {"name":"Ankita", "contact": 12344456, "typeOfQuery":"good","serviceRating":"good","softwareUserRating":"good"},
      {"name":"Vishal", "contact": 9123654, "typeOfQuery":" very good","serviceRating":" very good","softwareUserRating":"excellent"},
      {"name":"Trishan", "contact": 8123654, "typeOfQuery":"bad","serviceRating":" very good","softwareUserRating":"verygood"},
      {"name":"Ajeet", "contact": 7123654, "typeOfQuery":"excellent","serviceRating":"good","softwareUserRating":"bad"},
      {"name":"Avinash", "contact": 6123654, "typeOfQuery":"good","serviceRating":"bad","softwareUserRating":"good"},
      {"name":"Rakesh", "contact": 5123654, "typeOfQuery":"very good","serviceRating":"excellent","softwareUserRating":"excellent"},
    
    ];
  }
  }
    
     

