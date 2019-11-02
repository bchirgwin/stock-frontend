import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private dataService: DataService) {
  }

  selectStock(symbol) {
    return this.dataService.getStockData(symbol);
  }
}
