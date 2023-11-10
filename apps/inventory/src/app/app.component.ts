import { Component } from '@angular/core';
import { ProductListComponent } from '@angular-monorepo/products';
import { OrderListComponent, OrdersComponent } from '@angular-monorepo/orders';

@Component({
  standalone: true,
  imports: [ProductListComponent, OrdersComponent, OrderListComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inventory App';
}
