import { Component, OnInit } from '@angular/core';
import { TopicValuesService } from 'src/app/shared/services/topic-values.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bool: boolean = false;
  labels: any = [];
  values: any = [];
  constructor(private topicValuesService: TopicValuesService ) { }

  ngOnInit() {
    this.labels = this.topicValuesService.getTopicNames();
    console.log('label', this.labels);
    this.values = this.topicValuesService.getTopicProductsCount();
    
    if (this.labels && this.values){
      this.bool = true;
    }
  }

}
