import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import * as d3 from 'd3';
import {CandlestickDataModel} from '../candlestick-data-model';

interface DataModel {
  letter: string;
  frequency: number;
}

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandlestickChartComponent
  implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('chart', { static: true })
  private chartContainer: ElementRef;

  // @Input()
  // data: DataModel[];
  data2 = [
    {
      letter: 'A',
      frequency: 0.08167
    },
    {
      letter: 'B',
      frequency: 0.01492
    },
    {
      letter: 'C',
      frequency: 0.02782
    },
    {
      letter: 'D',
      frequency: 0.04253
    },
    {
      letter: 'E',
      frequency: 0.12702
    },
    {
      letter: 'F',
      frequency: 0.02288
    },
    {
      letter: 'G',
      frequency: 0.02015
    },
    {
      letter: 'H',
      frequency: 0.06094
    },
    {
      letter: 'I',
      frequency: 0.06966
    },
    {
      letter: 'J',
      frequency: 0.00153
    },
    {
      letter: 'K',
      frequency: 0.00772
    },
    {
      letter: 'L',
      frequency: 0.04025
    },
    {
      letter: 'M',
      frequency: 0.02406
    },
    {
      letter: 'N',
      frequency: 0.06749
    },
    {
      letter: 'O',
      frequency: 0.07507
    },
    {
      letter: 'P',
      frequency: 0.01929
    },
    {
      letter: 'Q',
      frequency: 0.00095
    },
    {
      letter: 'R',
      frequency: 0.05987
    },
    {
      letter: 'S',
      frequency: 0.06327
    },
    {
      letter: 'T',
      frequency: 0.09056
    },
    {
      letter: 'U',
      frequency: 0.02758
    },
    {
      letter: 'V',
      frequency: 0.00978
    },
    {
      letter: 'W',
      frequency: 0.0236
    },
    {
      letter: 'X',
      frequency: 0.0015
    },
    {
      letter: 'Y',
      frequency: 0.01974
    },
    {
      letter: 'Z',
      frequency: 0.00074
    }
  ];
  @Input() data: CandlestickDataModel[];

  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  ngOnInit() {}

  constructor() {}

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(): void {
    if (!this.data) {
      return;
    }

    this.createChart();
  }

  onResize(e: Event) {
    this.createChart();
  }

  onClick() {
    setInterval(
      function() {
        this.data2.forEach(x => {
          x.frequency = Math.random();
        });
        this.createChart();
      }.bind(this),
      250
    );
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    d3.select(element)
      .select('svg')
      .remove();
    const data = this.data2;
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const contentWidth =
      element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight =
      element.offsetHeight - this.margin.top - this.margin.bottom;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.letter));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.frequency)]);

    const g = svg
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.letter))
      .attr('y', d => y(d.frequency))
      .attr('width', x.bandwidth())
      .attr('height', d => contentHeight - y(d.frequency));
  }
}
