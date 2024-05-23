import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BudgetproxyService {

  hostUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  createBudget(expense : Object){
    return this.httpClient.post(this.hostUrl + '/app/budget', expense)
  }

  getAllBudgets(){
    return this.httpClient.get(this.hostUrl + '/app/budget/')
  }

  getSingleBudget(budgetId:number){
    return this.httpClient.get(this.hostUrl + `/app/budget/${budgetId}`)
  }

  getReports(report:any){
    
    let params = new HttpParams().set('month',report.month).set('year',report.year);
    return this.httpClient.get(this.hostUrl + `/app/report/`, {params:params})
  }

  getAllCategories(){
    return this.httpClient.get(this.hostUrl + '/app/category/')
  }
}
