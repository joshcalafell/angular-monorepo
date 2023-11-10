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
  title = 'Orders';
  sortedByIdAsc: boolean = true;
  sortedByCustomerNameAsc: boolean = true;
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

  sortOrdersById() {
    this.sortedByIdAsc = !this.sortedByIdAsc;
    this.orders.sort((order) => {
      return order.id * -1;
    });
  }

  sortOrdersByCustomerName() {
    if (!this.sortedByCustomerNameAsc) {
      this.sortedByCustomerNameAsc = true;
      return this.orders.sort();
    } else {
      this.sortedByCustomerNameAsc = false;
      return this.orders.sort().reverse();
    }
  }
}
