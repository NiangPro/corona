import { Component, OnInit } from '@angular/core';
import { DateServiceService } from '../services/date-service.service';
import { GlobaldataSummary } from '../models/global-data';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss']
})
export class BilanComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  globalData : GlobaldataSummary[] ; 
  pieChart : GoogleChartInterface = {
    chartType : 'PieChart' 
  }
  constructor(private dataservice : DateServiceService) { }

    initChart(){

        let datatable = [];
        datatable.push(["Country", "Cases"])
        this.globalData.forEach(cs=>{
          datatable.push([
            cs.country, cs.confirmed
          ])  
        }) 
        console.log(datatable); 

       this.pieChart = {
        chartType: 'pieChart',
        dataTable: datatable,
        //firstRowIsData: true,
        options: {'Country': 'Cases'},
      };
    } 
  ngOnInit(): void {
      this.dataservice.getGlobalData()
      .subscribe(
        {
          next : (result)=>{
            console.log(result);
            this.globalData = result;
            result.forEach(cs=>{
              if(!Number.isNaN(cs.confirmed)){
                this.totalActive += cs.active
                this.totalConfirmed += cs.confirmed
                this.totalDeaths += cs.deaths
                this.totalRecovered += cs.recovered
            }
              
            })

            this.initChart();
          }
        }
      )

  }

}
