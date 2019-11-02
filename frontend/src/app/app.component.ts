import { Component, AfterContentInit } from '@angular/core';

import { Stock } from './stock.model';
import { MOCKDATA } from './mockdata';
import * as d3 from 'd3';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {StoreService} from './store.service';

interface DataModel {
  letter: string;
  frequency: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  data: Observable<DataModel>;
  count: any = 0;

  stocks: any;

  /*Create fake data from various sources*/
  /*eventually make into a service*/
  mockFromJson: Stock[] = require('../../data.json');
  moreMockdata: Stock[] = [
    new Stock('Tesla', 'T', 176.27),
    { name: 'Apple', symbol: 'AAPL', closingprice: 142.67 },
    { name: 'Microsoft', symbol: 'MSFT', closingprice: 71.82 },
    { name: 'Planting Life Quality', symbol: 'PLQ', closingprice: 91.71 },
    { name: 'Max', symbol: 'ZZZ', closingprice: 89.35 }
  ];
  mockdata = [...MOCKDATA, ...this.moreMockdata, ...this.mockFromJson];

  constructor(private storeService: StoreService) {
    this.storeService.selectStock('A')
      .subscribe(data => {
        this.stocks = data;
      });
  }
  // constructor(private http: HttpClient) {
  //   this.data = this.http
  //     .get<DataModel>('./assets/data.json')
  //     .pipe(delay(3000 * this.count++));
  // }

  ngAfterContentInit() {
    d3.csv('http://localhost:8080/assets/FTSE.csv').then(data =>
      console.log(data)
    );
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      'https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js',
      'https://d3js.org/d3.v5.min.js',
      'http://localhost:8080/assets/script.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
