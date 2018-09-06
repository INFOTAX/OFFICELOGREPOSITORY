import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";
import { FrontLayoutComponent } from './front-layout/front-layout.component';

import { CompanylogService } from './services/companylog.service';

import { HttpClientModule } from '@angular/common/http';
import { MarketinglogService } from './services/marketinglog.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUserFormComponent } from './login-user-form/login-user-form.component';
import { UserlogService } from './services/userlog.service';

import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { UserSignService } from './services/usersign.service';

import { CompanyReportService } from './services/company-report.service';
import { MarketingConversionReportService } from './services/marketing-conversion-report.service';
import { SharedModule } from './shared/shared.module';

import { AdminUserProfileMarketingReportingComponent } from './admin-user-profile-marketing-reporting/admin-user-profile-marketing-reporting.component';
import { AdminUserProfileCompanyReportingComponent } from './admin-user-profile-company-reporting/admin-user-profile-company-reporting.component';
import { AdminUserwiseReportDashboardComponent } from './admin-userwise-report-dashboard/admin-userwise-report-dashboard.component';
import { AdminUserProfileReportingService } from './services/admin-user-profile-reporting.service';
import { AdminConsolidatedMarketingReportingComponent } from './admin-consolidated-marketing-reporting/admin-consolidated-marketing-reporting.component';
import { AdminConsolidatedCompanyReportingComponent } from './admin-consolidated-company-reporting/admin-consolidated-company-reporting.component';
import { CompanyModule } from './Component/Company/company.module';
import { ConversionModule } from './Component/Conversion/conversion.module';
import { MarketingModule } from './Component/Marketing/marketing.module';

const appRoutes: Routes = [
 
  
  { path: 'dashboard_log', component: DashboardComponent },
  { path: 'user_log', component:LoginUserFormComponent},
  
  
  { path: '', redirectTo: '/dashboard_log', pathMatch: 'full' },
  { path: 'user_sign', component: SignInFormComponent},
  
  { path: 'admin-userwise-report-dashboard', component: AdminUserwiseReportDashboardComponent},
  
  { path: 'admin_user_profile_company_reporting/:userName', component: AdminUserProfileCompanyReportingComponent},
  { path: 'admin_user_profile_marketing_reporting/:userName', component: AdminUserProfileMarketingReportingComponent},
  { path: 'Marketing-report', component: AdminConsolidatedMarketingReportingComponent},
  { path: 'Company-report', component: AdminConsolidatedCompanyReportingComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
  
    FrontLayoutComponent,
  
    NavigationBarComponent,
    DashboardComponent,
    LoginUserFormComponent,
    
    SignInFormComponent,
    
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
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    CompanyModule,
    ConversionModule,
    MarketingModule
    
  ],
  providers: [CompanylogService,UserlogService,MarketinglogService,UserSignService,
              CompanyReportService,MarketingConversionReportService,AdminUserProfileReportingService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
