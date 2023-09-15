import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './component/display/display.component';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { CounterComponent } from './component/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterAppReducer } from './store/counter.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DisplayComponent,
    CustomcounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({myCountStore:counterAppReducer}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
