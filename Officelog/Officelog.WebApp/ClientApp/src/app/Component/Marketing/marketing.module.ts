import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingDashboardComponent } from './marketing-dashboard/marketing-dashboard.component';
import { MarketingLogFormComponent } from './marketing-log-form/marketing-log-form.component';
import { MarketingLogListComponent } from './marketing-log-list/marketing-log-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/primeng';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
const appRoutes: Routes = [
  { path: 'marketing_log/:id', component: MarketingLogFormComponent },
  { path: 'marketing_log_list', component: MarketingLogListComponent },
  { path: 'marketing-dashBoard', component: MarketingDashboardComponent },
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
  declarations: [MarketingDashboardComponent,
    MarketingLogFormComponent,
    MarketingLogListComponent
  ]
})
export class MarketingModule { }
