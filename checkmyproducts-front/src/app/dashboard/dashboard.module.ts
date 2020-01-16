import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { MatList, MatListItem } from '@angular/material/list';
import { MatRippleModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider'
 

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, ProductsListComponent, ProductComponent, MatList, MatListItem],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatRippleModule,
    MatDividerModule
  ]
})
export class DashboardModule { }
