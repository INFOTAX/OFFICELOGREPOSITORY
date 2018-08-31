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

  constructor(private _router : Router) { }

  ngOnInit() {
    this.items = [ 
      {label: 'Home', icon: 'fa fa-fw fa-home' ,routerLink: ['/dashboard_log']},
    {label: 'Company list', icon: 'fa fa-fw fa-book' ,routerLink: ['/company_log_list']},
  {label: 'Marketing list', icon: 'fa fa-fw fa-book',routerLink: ['/marketing_log_list']}
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
}
