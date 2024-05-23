import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleTransactionComponent } from './single-transaction/single-transaction.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'transactions', component:TransactionsComponent},
  {path:'transaction/:id', component:SingleTransactionComponent},
  {path:'report', component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
