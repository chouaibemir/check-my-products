import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../product/models/product';
import { Api } from '../api';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductsService {
    constructor(private http: HttpClient) {
    }

    public getProducts(sort_by: string, order: string, per_page: string): Observable<any> {
        return this.http.get(Api.products,  {
            params: {
                sort_by: sort_by ? sort_by : 'day',
                order: order ? order : 'desc',
                per_page: per_page ? per_page : '5'
              }
          })
          .pipe(
              map((response:any) => {
                const productsList = response as Product[];
                return productsList;
              })
          )
    }

}


