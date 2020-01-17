import { Component, Input } from '@angular/core';
import { TopicValuesService } from 'src/app/shared/services/topic-values.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  constructor(private topicvaluesService: TopicValuesService) {
  }
  // Pie
  @Input()
  public pieChartLabels: string[] ;

  @Input()
  public pieChartData: number[] ;

}
