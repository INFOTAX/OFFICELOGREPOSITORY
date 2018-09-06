import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';
import { ConversionListComponent } from './conversion-list/conversion-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
const appRoutes: Routes = [
  { path: 'conversion_list', component: ConversionListComponent },
  { path: 'conversion-form/:id', component: ConversionFormComponent},
  { path: 'conversion-form/:id', component: ConversionFormComponent}
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
  declarations: [ConversionFormComponent,
    ConversionListComponent
  ]
})
export class ConversionModule { }
