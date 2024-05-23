import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BudgetproxyService } from '../budgetproxy.service';
import { ChartComponent } from 'ng-apexcharts'
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';

 export type ChartOptions = {
    series : ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
};

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})

export class ReportComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  formSubmitted= false;
  reportShow = false;
  reportInfo:any;
  constructor(private proxy$:BudgetproxyService){
    this.chartOptions = {
      series: [],
      chart: {
        type: "pie"
      },
      labels: [],
      responsive: []
    };
  };

  ngAfterViewInit(){
    if(this.chart){
      this.chart.updateOptions(this.chartOptions);
    }
  }


  createForm = new FormGroup({
    month : new FormControl('',[
      Validators.required
    ]),
    year: new FormControl('',[
      Validators.required
    ]),
  });

  // sampleOutput = [
  //   {
  //       "totalAmount": 185,
  //       "type": "Expense"
  //   },
  //   {
  //       "totalAmount": 603,
  //       "type": "Income"
  //   }
  // ];

  onSubmit(){
    this.formSubmitted = true;
    if(this.createForm.valid){
      console.log(this.createForm.value);
      this.proxy$.getReports(this.createForm.value).subscribe((result : any) => {
        console.log(result);
        this.reportInfo = result;
        this.reportShow = true;
        this.chartOptions = {
          series: this.reportInfo.map((item: { totalAmount: any; }) => item.totalAmount),
          chart: {
            width: 380,
            type: "pie"
          },
          labels: this.reportInfo.map((item: { type: any; }) => item.type),
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
      })

      // this.reportInfo = this.sampleOutput;
      // this.reportShow = true;
      // this.chartOptions = {
      //   series: this.reportInfo.map((item: { totalAmount: any; }) => item.totalAmount),
      //   chart: {
      //     width: 380,
      //     type: "pie"
      //   },
      //   labels: this.reportInfo.map((item: { type: any; }) => item.type),
      //   responsive: [
      //     {
      //       breakpoint: 480,
      //       options: {
      //         chart: {
      //           width: 200
      //         },
      //         legend: {
      //           position: "bottom"
      //         }
      //       }
      //     }
      //   ]
      // };
      if(this.chart){
        this.chart.updateOptions(this.chartOptions);
      }

    }
  }
}
