import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from '../product/models/product';

@Component({
  selector: 'app-products-list',
  providers: [ProductsService],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productList: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts('day', 'desc', '10').subscribe(
      (res)=> {
        this.productList = res;
      }
    );
  }

}
