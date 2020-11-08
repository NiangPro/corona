import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { GlobaldataSummary } from '../models/global-data';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
    private globalDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/07-06-2020.csv';
  constructor(private http : HttpClient) { }

  getGlobalData(){
      return this.http.get(this.globalDataUrl, {responseType : 'text'}).pipe(
        map(result=>{
                let data: GlobaldataSummary[] = [];
                let raw = {}
              let rows = result.split('\n');
              rows.splice(0, 1);
              // console.log(rows);
              rows.forEach(row=>{
                let cols = row.split(/,(?=\S)/)
                    
                    let cs =  {
                      country : cols[3],
                      confirmed : +cols[7],
                      deaths : +cols[8],
                      recovered : +cols[9],
                      active : +cols[9],
                  };
                  let temp : GlobaldataSummary = raw[cs.country];
                  if(temp){
                    temp.active = cs.active + temp.active
                    temp.confirmed = cs.confirmed + temp.confirmed
                    temp.deaths = cs.deaths + temp.deaths
                    temp.recovered = cs.recovered + temp.active

                    raw[cs.country] = temp;
                  }else{
                    raw[cs.country] = cs;
                  }
              })  
          return <GlobaldataSummary[]>Object.values(raw);
        })
      )
  }
} 
