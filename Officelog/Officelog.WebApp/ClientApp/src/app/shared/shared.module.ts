import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';



@NgModule({
    imports: [
        PrimeNgModule
    ],
    exports: [
        PrimeNgModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
