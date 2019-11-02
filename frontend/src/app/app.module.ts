import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { HighlightPipe } from './highlight.pipe';
import { DisplayAreaComponent } from './display-area/display-area.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    HighlightPipe,
    DisplayAreaComponent,
    CandlestickChartComponent,
    ChartComponent
  ],
  //note, import order matters - must import after BrowserModule
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
