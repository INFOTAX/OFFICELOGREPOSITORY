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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import {CardModule} from 'primeng/card';
import { LoginService } from './services/login.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { TokenInterceptor } from './services/token-interceptor';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("token");
}


const appRoutes: Routes = [
  { path: 'companydashboard_log', component: CompanydashboardComponent,canActivate : [AuthGuardService] },
  { path: 'company_log/:id', component: CompanyLogFormComponent,canActivate : [AuthGuardService] },
  { path: 'marketing_log/:id', component: MarketingLogFormComponent,canActivate : [AuthGuardService] },
  { path: 'company_log_list', component: CompanyLogListComponent,canActivate : [AuthGuardService] },
  { path: 'marketing_log_list', component: MarketingLogListComponent,canActivate : [AuthGuardService] },
  { path: 'dashboard_log', component: DashboardComponent,canActivate : [AuthGuardService] },
  { path: 'user_log', component:LoginUserFormComponent,canActivate : [AuthGuardService]},
  { path: 'conversion_list', component: ConversionListComponent,canActivate : [AuthGuardService] },
  { path: 'marketing-dashBoard', component: MarketingDashboardComponent,canActivate : [AuthGuardService] },
  { path: '', redirectTo: '/dashboard_log', pathMatch: 'full' },
  { path: 'user_sign', component: SignInFormComponent,canActivate : [AuthGuardService]},
  { path: 'conversion-form/:id', component: ConversionFormComponent,canActivate : [AuthGuardService]},
  { path: 'admin-userwise-report-dashboard', component: AdminUserwiseReportDashboardComponent,
    canActivate : [AuthGuardService]},
  
  { path: 'admin_user_profile_company_reporting/:userName', component: AdminUserProfileCompanyReportingComponent,canActivate : [AuthGuardService]},
  { path: 'admin_user_profile_marketing_reporting/:userName', component: AdminUserProfileMarketingReportingComponent},
  { path: 'Marketing-report', component: AdminConsolidatedMarketingReportingComponent},
  { path: 'Company-report', component: AdminConsolidatedCompanyReportingComponent},
  { path: 'conversion-form/:id', component: ConversionFormComponent},
  {path: 'login',component: SignInFormComponent},
  

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
    CardModule,
    SharedModule,   
    BrowserModule,
    HttpClientModule,
    ChartModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        
        headerName : 'Authorization',
        authScheme : 'Bearer ',
        tokenGetter : tokenGetter,
        throwNoTokenError : true
      }
    })
    
  ],
  providers: [CompanylogService,UserlogService,MarketinglogService,UserSignService,
              CompanyReportService,MarketingConversionReportService,AdminUserProfileReportingService,LoginService,AuthGuardService,
              { provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
