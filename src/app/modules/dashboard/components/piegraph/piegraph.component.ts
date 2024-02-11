import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { HasRoleDirective } from '../../../../hasRole.directive';

@Component({
  selector: 'app-piegraph',
  standalone: true,
  imports: [CommonModule, HasRoleDirective],
  templateUrl: './piegraph.component.html',
  styleUrl: './piegraph.component.scss'
})
export class PiegraphComponent implements OnInit{
  @Input() available: number = 10;
  @Input() outOfStock: number = 20;
  ngOnInit(): void {
    this.renderChart()
  }
  renderChart(): void {
    const chartOptions = {
      series: [this.available, this.outOfStock, 20.4],
      colors: ["#1C64F2", "#16BDCA", "#9061F9"],
      chart: {
        height: 600,
        width: "100%",
        type: "pie",
      },

  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'center',
    floating: false,
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
        colors: undefined,
        useSeriesColors: false
    },
    markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
        horizontal: 5,
        vertical: 0
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    },
}

      // Rest of the options...
    };


    const chart = new ApexCharts(document.getElementById("pie-chart"), chartOptions);
    chart.render();
  }
}
