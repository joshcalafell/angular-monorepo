import { Component } from '@angular/core';
import { ProductListComponent } from '@angular-monorepo/products';
import { OrderListComponent, OrdersComponent } from '@angular-monorepo/orders';
import { BlockquoteComponent } from '@angular-monorepo/blockquote';
import { UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    BlockquoteComponent,
    ProductListComponent,
    OrdersComponent,
    OrderListComponent,
    UpperCasePipe,
  ],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Genesis Candles';
}
