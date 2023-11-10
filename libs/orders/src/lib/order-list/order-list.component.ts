import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  title = '- Recent Orders';
  sortedByIdAsc: boolean = true;
  sortedByTotalAsc: boolean = true;
  lastSortedBy: string = 'id';
  sorted: boolean = false;
  orders = [
    {
      id: 1,
      customer_name: 'John Doe',
      order_date: '2021-01-01',
      order_status: 'Processing',
      order_total: 203.23,
    },
    {
      id: 2,
      customer_name: 'Jane Doe',
      order_date: '2021-01-01',
      order_status: 'In Transit',
      order_total: 100.61,
    },
    {
      id: 3,
      customer_name: 'John Smith',
      order_date: '2021-01-01',
      order_status: 'Fulfilled',
      order_total: 90.14,
    },
    {
      id: 4,
      customer_name: 'Jane Smith',
      order_date: '2021-01-01',
      order_status: 'Pending',
      order_total: 33.27,
    },
    {
      id: 5,
      customer_name: 'Jim Simmons',
      order_date: '2021-01-01',
      order_status: 'Fulfilled',
      order_total: 1002.33,
    },
  ];

  sortedOrders = this.orders;

  sortOrdersById() {
    this.sorted = true;
    this.lastSortedBy = 'id';
    this.sortedByIdAsc = !this.sortedByIdAsc;
    this.orders.sort((a, b) => {
      return this.sortedByIdAsc ? (a.id > b.id ? 1 : -1) : a.id < b.id ? 1 : -1;
    });
  }

  sortOrdersByTotal() {
    this.sorted = true;
    this.lastSortedBy = 'total';
    this.sortedByTotalAsc = !this.sortedByTotalAsc;
    this.orders.sort((a, b) => {
      return this.sortedByTotalAsc
        ? a.order_total > b.order_total
          ? 1
          : -1
        : a.order_total < b.order_total
        ? 1
        : -1;
    });
  }
}
