import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";
import { FrontLayoutComponent } from './front-layout/front-layout.component';

import { CompanylogService } from './services/companylog.service';



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LoginService } from './services/login.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { TokenInterceptor } from './services/token-interceptor';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

const appRoutes: Routes = [
 
  
  { path: 'dashboard_log', component: DashboardComponent },
  { path: 'user_log', component:LoginUserFormComponent},
  
  
  { path: '', redirectTo: '/dashboard_log', pathMatch: 'full' },
  { path: 'user_sign', component: SignInFormComponent},
  
  { path: 'admin-userwise-report-dashboard', component: AdminUserwiseReportDashboardComponent},


]
export function tokenGetter() {
  return localStorage.getItem("token");
}



 


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
    MarketingModule,
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
