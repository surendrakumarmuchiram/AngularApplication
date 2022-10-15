import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{EmployeeComponent} from './employee/employee.component'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { employeeTitlePipe } from './employee/employeeTitle.pipe'

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeelistComponent,employeeTitlePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
