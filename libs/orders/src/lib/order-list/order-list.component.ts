import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mockOrders } from '../order.model';
import { OrderListTableComponent } from '../order-list-table/order-list-table.component';

@Component({
  selector: 'angular-monorepo-order-list',
  standalone: true,
  imports: [CommonModule, OrderListTableComponent],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  title = '- Recent Orders';

  orders = mockOrders();
}
