import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyLogFormComponent } from './company-log-form/company-log-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import { MarketingLogFormComponent } from './marketing-log-form/marketing-log-form.component';
import { RouterModule, Routes } from "@angular/router";
import { FrontLayoutComponent } from './front-layout/front-layout.component';


const appRoutes: Routes =[
  {path:'company_log', component:CompanyLogFormComponent},
  {path:'marketing_log', component:MarketingLogFormComponent},
  {path: '', redirectTo: '/company_log', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyLogFormComponent,
    MarketingLogFormComponent,
    FrontLayoutComponent
  ],
  imports: [
    BrowserModule,
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
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
