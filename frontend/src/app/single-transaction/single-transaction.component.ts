import { Component } from '@angular/core';
import { BudgetproxyService } from '../budgetproxy.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-transaction',
  templateUrl: './single-transaction.component.html',
  styleUrl: './single-transaction.component.css'
})
export class SingleTransactionComponent {
  singleCategory: any;
  constructor(private route:ActivatedRoute ,private proxy$:BudgetproxyService){

    this.proxy$.getSingleBudget(this.route.snapshot.params['id']).subscribe((result:any) =>{
      console.log(result);
      this.singleCategory = result;
    })
  }
  

}
