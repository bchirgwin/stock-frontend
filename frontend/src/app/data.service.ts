import {Injectable} from '@angular/core';
import {of, interval, Observable, BehaviorSubject} from 'rxjs';
import {mapTo, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  stocks = new BehaviorSubject<any>(this.initData());

  initData() {
    const stockData = [];
    for (let i = 0; i <= 1000; i++) {
      stockData.push({
        symbol: 'A',
        open: 10,
        close: 20,
        high: Math.random() * 50 + 50,
        low: Math.random() * 50,
        volume: 1000,
        epoch: i
      });
    }
    return stockData;
  }
  setData() {
    return [...this.stocks.getValue().slice(1), {
        symbol: 'A',
        open: 10,
        close: 20,
        high: Math.random() * 50 + 50,
        low: Math.random() * 50,
        volume: 1000,
        epoch: 1000
    }];
  }

  constructor() {
    setInterval(() => {
      this.stocks.next(this.setData());
    }, 0);
    // interval(1000).pipe(
    //   tap(this.setData)
    // );
  }

  getStockData(symbol) {
    return this.stocks;
  }

}
