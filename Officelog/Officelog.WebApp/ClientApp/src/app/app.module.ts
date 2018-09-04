import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyLogFormComponent } from './company-log-form/company-log-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MarketingLogFormComponent } from './marketing-log-form/marketing-log-form.component';
import { RouterModule, Routes } from "@angular/router";
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { CompanyLogListComponent } from './company-log-list/company-log-list.component';
import { CompanylogService } from './services/companylog.service';
import { MarketingLogListComponent } from './marketing-log-list/marketing-log-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketinglogService } from './services/marketinglog.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUserFormComponent } from './login-user-form/login-user-form.component';
import { UserlogService } from './services/userlog.service';
import { ConversionListComponent } from './conversion-list/conversion-list.component';
import { MarketingDashboardComponent } from './marketing-dashboard/marketing-dashboard.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { UserSignService } from './services/usersign.service';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { CompanyReportService } from './services/company-report.service';
import { MarketingConversionReportService } from './services/marketing-conversion-report.service';
import { SharedModule } from './shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';
import { AdminUserProfileMarketingReportingComponent } from './admin-user-profile-marketing-reporting/admin-user-profile-marketing-reporting.component';
import { AdminUserProfileCompanyReportingComponent } from './admin-user-profile-company-reporting/admin-user-profile-company-reporting.component';
import { AdminUserwiseReportDashboardComponent } from './admin-userwise-report-dashboard/admin-userwise-report-dashboard.component';
import { AdminUserProfileReportingService } from './services/admin-user-profile-reporting.service';
import { AdminConsolidatedMarketingReportingComponent } from './admin-consolidated-marketing-reporting/admin-consolidated-marketing-reporting.component';
import { AdminConsolidatedCompanyReportingComponent } from './admin-consolidated-company-reporting/admin-consolidated-company-reporting.component';


const appRoutes: Routes = [
  { path: 'companydashboard_log', component: CompanydashboardComponent },
  { path: 'company_log/:id', component: CompanyLogFormComponent },
  { path: 'marketing_log/:id', component: MarketingLogFormComponent },
  { path: 'company_log_list', component: CompanyLogListComponent },
  { path: 'marketing_log_list', component: MarketingLogListComponent },
  { path: 'dashboard_log', component: DashboardComponent },
  { path: 'user_log', component:LoginUserFormComponent},
  { path: 'conversion_list', component: ConversionListComponent },
  { path: 'marketing-dashBoard', component: MarketingDashboardComponent },
  { path: '', redirectTo: '/dashboard_log', pathMatch: 'full' },
  { path: 'user_sign', component: SignInFormComponent},
  { path: 'conversion-form/:id', component: ConversionFormComponent},
  { path: 'admin-userwise-report-dashboard', component: AdminUserwiseReportDashboardComponent},
  
  { path: 'admin_user_profile_company_reporting/:userName', component: AdminUserProfileCompanyReportingComponent},
  { path: 'admin_user_profile_marketing_reporting/:userName', component: AdminUserProfileMarketingReportingComponent},
  { path: 'Marketing-report', component: AdminConsolidatedMarketingReportingComponent},
  { path: 'Company-report', component: AdminConsolidatedCompanyReportingComponent},
  { path: 'conversion-form/:id', component: ConversionFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyLogFormComponent,
    MarketingLogFormComponent,
    FrontLayoutComponent,
    CompanyLogListComponent,
    MarketingLogListComponent,
    NavigationBarComponent,
    DashboardComponent,
    LoginUserFormComponent,
    ConversionListComponent,
    MarketingDashboardComponent,
    CompanydashboardComponent,
    SignInFormComponent,
    ConversionFormComponent,
    AdminUserProfileMarketingReportingComponent,
    AdminUserProfileCompanyReportingComponent,
    AdminUserwiseReportDashboardComponent,
    AdminConsolidatedMarketingReportingComponent,
    AdminConsolidatedCompanyReportingComponent
  ],
  imports: [
    SharedModule,   
    BrowserModule,
    HttpClientModule,
    ChartModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [CompanylogService,UserlogService,MarketinglogService,UserSignService,
              CompanyReportService,MarketingConversionReportService,AdminUserProfileReportingService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
