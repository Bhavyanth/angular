import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  people: any[] =[{
    "name": "Bob",
    "age": "28",
    "country": "AU"
  },{
    "name": "Tom",
    "age": "23",
    "country": "UK"
  },{
  "name": "Alice",
  "age": "35",
  "country": "US"
},{
  "name": "John",
  "age": "45",
  "country": "IN"
},{
  "name": "Default",
  "age": "45",
  "country": "GE"
}] // we can store json objects in this array 
  constructor() { 
    
  }
  getTextSize(person){
    if(person.country == 'IN'){
      return 24;
    } else if (person.country == 'US') {
      return 36;
    }
  }

  ngOnInit() {
  }

}
