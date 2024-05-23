import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BudgetproxyService } from '../budgetproxy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  categories :any;
  formSubmitted= false;
  constructor(private proxy$:BudgetproxyService, private router: Router){
    proxy$.getAllCategories().subscribe((result: any) => {this.categories = result;
      console.log(result);
    })
  }
  createForm = new FormGroup({
    categoryId : new FormControl('',[
      Validators.required
    ]),
    userId: new FormControl('664531c188d1ad588b6f3808'),
    amount : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    date : new FormControl('',[
      Validators.required
    ]),
    note : new FormControl(''),
    type : new FormControl('',[
      Validators.required
    ])
  });
  title = 'SmartSpend';

  onSubmit(){
    this.formSubmitted = true;
    if(this.createForm.valid){
      this.proxy$.createBudget(this.createForm.value).subscribe((result : any) => {
        console.log(result)
        if(result){
          this.router.navigate(['/transactions']);
        }
      })
    
    }
  }

}
