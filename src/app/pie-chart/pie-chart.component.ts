import { Component, OnInit, OnDestroy} from '@angular/core';
import { EChartsOption } from 'echarts';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { chartOptions, defData, Medals } from '../services/sources';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnDestroy{

  constructor(private dataService: DataService) {}

  public readonly data$ = this.dataService.data$;
  public chartOption: EChartsOption = chartOptions;
  private subscriptions: Subscription = new Subscription();

  public mergeChart$ = combineLatest([
    this.data$
  ]).pipe(
    map(
      (data: any[]): EChartsOption => this.getChart(data)
    )
  );

  public interateOverMedals (medals) : any {
    let women = 0;
    let men = 0;
    for (let medal of medals){
      if (medal.Gender === "women") {women++;}
      else {men++;}
    }
    console.log(women, men)
    return [women, men]
  }

  public getChart(  data  ): EChartsOption {
    const stuff = this.interateOverMedals(data);
    const newOptions: EChartsOption = {...this.chartOption};
    newOptions.series[0].data = [{name: 'women', value: stuff[0]}, {name: 'men', value: stuff[1]}];
    console.log(newOptions)
    return newOptions;
  }

  ngOnInit() {
    this.subscriptions.add(this.dataService.data$.subscribe(data => {
      this.mergeChart$ = combineLatest([
        this.data$
      ]).pipe(
        map(
          (data: any[]): EChartsOption => this.getChart(data)
        )
      );
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
