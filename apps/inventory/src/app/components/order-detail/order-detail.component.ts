import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Order } from '../../service/orders/order.model'
import { ActivatedRoute } from '@angular/router'
import { OrdersService } from '../../service/orders/orders.service'

@Component({
	selector: 'angular-monorepo-order-detail',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent {
	private orderService = inject(OrdersService)
	private activatedRoute = inject(ActivatedRoute)
	order: Order = {} as Order
	constructor() {
		this.orderService.$orders.subscribe((orders) => {
			const id = this.activatedRoute.snapshot.params['id']
			const found = orders.find((order) => order.id === id)
			if (found) {
				this.order = found
			}
		})
	}
}
