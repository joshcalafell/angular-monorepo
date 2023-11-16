import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

import { Order } from '../../service/orders/order.model'
import { OrdersService } from '../../service/orders/orders.service'
import { OrderListTableComponent } from '../order-list-table/order-list-table.component'

@Component({
	selector: 'angular-monorepo-order-list',
	standalone: true,
	imports: [CommonModule, OrderListTableComponent],
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
	title = '- Recent Orders'
	orders: Order[] = []

	constructor(private orderService: OrdersService) {}
	// TODO: Come back and find way to get from real DB
	ngOnInit(): void {
		this.orderService.$orders.subscribe((orders) => {
			this.orders = orders
		})
	}
}
