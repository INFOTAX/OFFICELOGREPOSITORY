import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogFormComponent } from './company-log-form/company-log-form.component';
import { CompanyLogListComponent } from './company-log-list/company-log-list.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
const appRoutes: Routes = [
  { path: 'companydashboard_log', component: CompanydashboardComponent },
  { path: 'company_log/:id', component: CompanyLogFormComponent },
  { path: 'company_log_list', component: CompanyLogListComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNgModule
    
  ],
  declarations: [
    CompanyLogFormComponent,
    CompanyLogListComponent,
    CompanydashboardComponent
  ]
})
export class CompanyModule { }
