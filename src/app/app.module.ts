import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TariffComponent } from './tariff/tariff.component';
import { TariffListComponent } from './tariff/tariff.list.component';

@NgModule({
  declarations: [
    AppComponent,
    TariffComponent,
    TariffListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
