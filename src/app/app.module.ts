import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, myReducer } from './shared/store/counter.reducer';
import { UsermgmtComponent } from './component/usermgmt/usermgmt.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    UsermgmtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counterStore:counterReducer}),
    StoreModule.forRoot({userStore:myReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
