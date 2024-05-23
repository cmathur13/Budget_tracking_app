import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetproxyService } from './budgetproxy.service';
import { SingleTransactionComponent } from './single-transaction/single-transaction.component';
import { ReportComponent } from './report/report.component';
import { NgApexchartsModule } from 'ng-apexcharts';
//included imports
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HomepageComponent,
    SingleTransactionComponent,
    ReportComponent
  ],
  //included SocialLoginModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    HttpClientModule,
    NgApexchartsModule,
    SocialLoginModule
  ],
  //included SocialAuthServiceConfig in BudgetproxyService
  providers: [
    BudgetproxyService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('YOUR_GOOGLE_CLIENT_ID')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
