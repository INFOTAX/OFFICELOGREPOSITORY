import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-companydashboard',
  templateUrl: './companydashboard.component.html',
  styleUrls: ['./companydashboard.component.css']
})
export class CompanydashboardComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  companydashboardLog(){

    this._router.navigate(['companydashboard_log']);
   
  }

}
