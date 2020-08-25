import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LowlayerComponent } from './lowlayer/lowlayer.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu'; 
import { MatSliderModule } from '@angular/material/slider';
import { InvestComponent } from './invest/invest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button';
import { LoginSignupComponent } from './login-signup/login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FAQComponent,
    FooterComponent,
    LowlayerComponent,
    InvestComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonModule,
    MatSliderModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
    },
      {
        path: 'invest',
        component: InvestComponent
    }
  ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   
 }
