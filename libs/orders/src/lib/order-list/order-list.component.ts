import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order, mockOrders } from '../order.model';

@Component({
  selector: 'angular-monorepo-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  title = '- Recent Orders';

  sortedByIdAsc = true;
  sortedByTotalAsc = true;

  lastSortedBy = 'id';

  sorted = false;

  orders = mockOrders();

  sortedOrders: Order[] = [];

  ngOnInit() {
    this.sortedOrders = this.orders;
  }

  sortOrdersById() {
    this.sorted = true;
    this.lastSortedBy = 'id';
    this.sortedByIdAsc = !this.sortedByIdAsc;
    this.orders.sort((a, b) =>
      this.sortedByIdAsc ? a.id - b.id : b.id - a.id
    );
  }

  sortOrdersByTotal() {
    this.sorted = true;
    this.lastSortedBy = 'total';
    this.sortedByTotalAsc = !this.sortedByTotalAsc;
    this.orders.sort((a, b) => {
      return this.sortedByTotalAsc
        ? a.order_total - b.order_total
        : b.order_total - a.order_total;
    });
  }
}
