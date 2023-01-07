import { Component, OnInit } from '@angular/core';
import { map} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { SmartGarden } from './SmartGarden';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit{

  public SmartGardenList : SmartGarden[] = [];
  public url = "https://smartgarden-19ad6-default-rtdb.europe-west1.firebasedatabase.app/";
  displayedColumns: string[] = ["Id", "arrosage", "date", "humidité", "luminosité", "temperature"];

  public current: SmartGarden = {
    id : 3,
    temperature :5,
    humidite: 7,
    arrosage : false,
    date: "10-06-1997",
    luminosite: 14.2
  };

  constructor(private http : HttpClient) { }

  ngOnInit(){
    this.retrievSmartGardenData();
  }

  private retrievSmartGardenData(){
    this.http.get<{[key : string]:SmartGarden}>(this.url+'sg.json')
    .pipe(map((res)=>{
      const sgList = []
      for (const key in res){
        if (res.hasOwnProperty(key)){
          sgList.push({...res[key], Id : key})
        }
      }
      return sgList;
    }))
    .subscribe((sgList) => {
      console.log(sgList);
      this.SmartGardenList = sgList;
    })
  }
}
