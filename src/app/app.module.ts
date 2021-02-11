import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EnableComponent } from './enable/enable.component';
import { ByclickComponent } from './byclick/byclick.component';
import { ServerComponent } from './server/server.component';
import { FavioriteComponent } from './faviorite/faviorite.component';
import { Employee1Component } from './employee1/employee1.component';
import { ReportComponent } from './report/report.component';
import { Report2Component } from './report2/report2.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { APISqlComponent } from './api-sql/api-sql.component';
import { FormsComponent } from './forms/forms.component';
import { MuraliComponent } from './murali/murali.component';


@NgModule({
  declarations: [
    AppComponent,
    EnableComponent,
    ByclickComponent,
    ServerComponent,
    FavioriteComponent,
    Employee1Component,
    ReportComponent,
    Report2Component,
    ApiCallComponent,
    APISqlComponent,
    FormsComponent,
    MuraliComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
