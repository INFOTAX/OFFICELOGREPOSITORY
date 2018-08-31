import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { CompanyLogFormComponent } from './company-log-form/company-log-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { MarketingLogFormComponent } from './marketing-log-form/marketing-log-form.component';
import { RouterModule, Routes } from "@angular/router";
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { TableModule } from 'primeng/table';
import { CompanyLogListComponent } from './company-log-list/company-log-list.component';
import { CompanylogService } from './services/companylog.service';
import { ICompanylog } from './company-log-list/company';
import { DataViewModule } from 'primeng/dataview';
import { MarketingLogListComponent } from './marketing-log-list/marketing-log-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketinglogService } from './services/marketinglog.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CalendarModule} from 'primeng/calendar';


import {ToastModule} from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import {ConfirmationService} from 'primeng/api';
import {Message, LazyLoadEvent} from 'primeng/components/common/api';
import {  GrowlModule } from 'primeng/growl';
import {ConfirmDialogModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/calendar';


const appRoutes: Routes = [
  { path: 'company_log/:id', component: CompanyLogFormComponent },
  { path: 'marketing_log/:id', component: MarketingLogFormComponent },
  { path: 'company_log_list', component: CompanyLogListComponent },
  { path: 'marketing_log_list', component: MarketingLogListComponent },
  { path: 'dashboard_log', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard_log', pathMatch: 'full' },
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
    DashboardComponent
  ],
  imports: [
    CalendarModule,
    GrowlModule,
    ConfirmDialogModule,
    CardModule,
    MenubarModule,
    DialogModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    PanelModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    InputTextareaModule,
    FieldsetModule,
    TableModule,
    DataViewModule,
    ToastModule,
    CalendarModule
  ],
  providers: [CompanylogService, MarketinglogService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
