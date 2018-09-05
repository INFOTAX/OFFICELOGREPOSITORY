import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  [x: string]: any;
  items: MenuItem[];

  constructor(private _router : Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.userName = params['userName'];
      
      
       
    })
    this.items = [ 
      {label: 'Home', icon: 'fa fa-fw fa-home' ,routerLink: ['/dashboard_log']},
      

      {label: 'Company',
      items:[
        {label: 'Company Log', icon: 'fa fa-fw fa-book' ,routerLink: ['/companydashboard_log']},
        {label: 'Company list', icon: 'fa fa-fw fa-book' ,routerLink: ['/company_log_list']},
      ],
       icon: 'fa fa-fw fa-book',routerLink: ['/companydashboard_log']},


       {label: 'Market', 
      items:[
        {label: 'Marketing Log', icon: 'fa fa-fw fa-book',routerLink: ['/marketing-dashBoard']},
        {label: 'Marketing list', icon: 'fa fa-fw fa-book',routerLink: ['/marketing_log_list']},
      ],
      icon: 'fa fa-fw fa-book',routerLink: ['/marketing-dashBoard']
    },
    {label: 'Admin User ProfileReporting Dashboard', 
    items:[
      {label: 'Company User Profile', icon: 'fa fa-fw fa-book',routerLink: ['/admin_user_profile_company_reporting,userName']},
      {label: 'Marketing User Profile', icon: 'fa fa-fw fa-book',routerLink: ['/admin_user_profile_marketing_reporting',this.userName]},
    ],
    icon: 'fa fa-fw fa-area-chart ',routerLink: ['/admin-userwise-report-dashboard']
  },

     
           
      {label: 'Conversion list', icon:'fa fa-fw fa-book',routerLink: ['/conversion_list']
    
    },

    {label: 'Consolidated-admin',
    items:[
      {label: 'Marketing-report', icon: 'fa fa-fw fa-book' ,routerLink: ['/Marketing-report']},
      {label: 'Company-report', icon: 'fa fa-fw fa-book' ,routerLink: ['/Company-report']},
    ],
     icon: 'fa fa-fw fa-book'},
  ]
      

     

}
  marketingLogList() {

    this._router.navigate(['marketing_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
  companyLogList(){

    this._router.navigate(['company_log_list']);
    // this.compLog=true;
    // this.markLog=false;
  }
  userLog(){

    this._router.navigate(['user_log']);
    
  }
  adminUserProfileCompanyReporting(){
    this._router.navigate(['/admin_user_profile_company_reporting']);
  }
  adminUserMarketingCompanyReporting(){
    this._router.navigate(['/admin_user_profile_marketing_reporting']);
  }
  adminUserWiseDashboardReporting(){
    this._router.navigate(['/admin-userwise-report-dashboard']);
  }
}
