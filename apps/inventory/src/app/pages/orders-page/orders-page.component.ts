import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { OrderListTableComponent } from '../../components/order-list-table/order-list-table.component'
import { Order } from '../../service/orders/order.model'
import { OrdersService } from '../../service/orders/orders.service'

@Component({
	selector: 'angular-monorepo-orders-page',
	standalone: true,
	imports: [CommonModule, OrderListTableComponent],
	templateUrl: './orders-page.component.html',
	styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
	title = '- Recent Orders'
	orders: Order[] = []

	constructor(private orderService: OrdersService) {}
	// TODO: Come back and find way to get from real DB
	ngOnInit(): void {
		this.orderService.$orders.subscribe((orders) => {
			if (orders.length > 0) {
				this.orders = orders
			} else {
				this.orders = []
			}
		})
	}
}
