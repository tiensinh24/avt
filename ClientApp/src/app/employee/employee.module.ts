import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FlexLayoutModule,    
  ]
})
export class EmployeeModule { }
