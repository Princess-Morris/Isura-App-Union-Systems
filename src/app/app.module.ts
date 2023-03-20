import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormComponent } from './form/form.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoute: Routes = [

  {path:'', component: AppComponent},
  {path:'./form', component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
