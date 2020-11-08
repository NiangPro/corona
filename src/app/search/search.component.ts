import { Component, OnInit } from '@angular/core';
import { DateServiceService} from 'src/app/services/date-service.service';
import { GlobaldataSummary } from 'src/app/models/global-data';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  data : GlobaldataSummary[] ;
  countries : string [] = [];

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;;
  constructor(private service : DateServiceService) { }

  ngOnInit(): void {

    this.service.getGlobalData().subscribe(result=>{
        this.data = result;
        this.data.forEach(cs=>{
          this.countries.push(cs.country)
        })
    })

  }

  updateValues(country : string){
    console.log(country); 
    this.data.forEach(cs=>{
      if(cs.country === country){
        this.totalActive = cs.active
        this.totalDeaths = cs.deaths
        this.totalConfirmed = cs.confirmed
        this.totalRecovered = cs.recovered
      }
    })

  }
    

}
