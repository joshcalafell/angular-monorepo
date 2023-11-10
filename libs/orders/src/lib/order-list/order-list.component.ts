import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  title = 'Orders';
  orders = [
    {
      id: 1,
      customer_name: 'John Doe',
      order_date: '2021-01-01',
      order_status: 'Fulfilled',
      order_total: 203.23
    },
    {
      id: 2,
      customer_name: 'Jane Doe',
      order_date: '2021-01-01',
      order_status: 'Fulfilled',
      order_total: 203.23
    },
    {
      id: 3,
      customer_name: 'John Smith',
      order_date: '2021-01-01',
      order_status: 'Fulfilled',
      order_total: 203.23
    },
    {
      id: 4,
      customer_name: 'Jane Smith',
      order_date: '2021-01-01',
      order_status: 'Fulfilled',
      order_total: 203.23
    }
  ];
}
