import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserProfileReportingService } from '../services/admin-user-profile-reporting.service';
@Component({
  selector: 'app-admin-user-profile-marketing-reporting',
  templateUrl: './admin-user-profile-marketing-reporting.component.html',
  styleUrls: ['./admin-user-profile-marketing-reporting.component.css']
})
export class AdminUserProfileMarketingReportingComponent implements OnInit {
  report;
  visitData: any;
  dataBar:any;
  userName;
  company;
  private opt: any = {
    legend: { position: 'bottom'}
  };

  constructor(private _router : Router,
    private route: ActivatedRoute,
    private adminCompanyService : AdminUserProfileReportingService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.userName = params['userName'];
      this.getCompanyReport(this.userName);
      
       
    })
  

 
    this.dataBar = {
      labels: ['Franchise', 'First', 'Second or third', 'Client', 'Other'],
      datasets: [
        {
          label: '2016 Data of Total Vistor',
          backgroundColor: '#841e38',
          borderColor: '#8e407f',
          fill: false,
          data: [35, 69, 30, 61, 36]
      },
          {
              label: '2017 Data of Total Vistor',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              fill: false,
              data: [65, 59, 80,55, 40]
          },
          {
            label: '2018 Data of Total Vistor',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            fill:false,
            data: [28, 48, 40, 19,90],
        }
      ]
      
  }


  }
  adminUserProfileMarketingReporting(){
    this._router.navigate(['/admin_user_profile_marketing_reporting']);
  }

  getCompanyReport(userName){
    this.adminCompanyService.getUserAdminCompanyReport(userName).subscribe(res => this.company = res);
  }

}
