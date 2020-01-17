import { Injectable } from '@angular/core';
import { Product } from 'src/app/dashboard/components/product/models/product';
import { Topic } from 'src/app/dashboard/components/product/models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicValuesService {

  topicNames: string[] = [];
  topicProductsCount: number[] = [];
  constructor() { }

  setTopicNames(topicNames: string[]) {
    this.topicNames = topicNames;
  }
  
  getTopicNames() {
    return this.topicNames;
  }

  setTopicProductsCount(topicProductsCount: number[]) {
    this.topicProductsCount = topicProductsCount;
  }
  
  getTopicProductsCount() {
    return this.topicProductsCount;
  }

  setNonDuplicateArray(productList: Product[]) {
    let topicNames:string[] = [];
    productList.map((product)=> {
      product.topics.map((topic)=> {
        topicNames.push(topic.name);
      })
    })
    const set = new Set(topicNames);
    set.forEach((item)=> {
      this.topicNames.push(item);
    })
    this.topicNames.map((topic) => {
      this.topicProductsCount.push(this.getNumberOfProductsByTopic(topic, productList));
    })
  }

  getNumberOfProductsByTopic(topicName: string, productsList: Product[]) {
    let counter = 0;
    productsList.map((product) => {
      product.topics.map((topicInList) => {
        if(topicInList.name === topicName) {
          counter = counter + 1;
        }
      })
    })
    return counter;
  }

}
