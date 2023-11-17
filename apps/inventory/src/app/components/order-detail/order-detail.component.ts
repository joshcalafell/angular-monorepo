import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Order } from '../../service/orders/order.model'
import { OrdersService } from '../../service/orders/orders.service'

@Component({
	selector: 'angular-monorepo-order-detail',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
	private orderService = inject(OrdersService)
	private activatedRoute = inject(ActivatedRoute)

	order: Order = {} as Order

	id = this.activatedRoute.snapshot.params['id']

	ngOnInit(): void {
		this.orderService.$orders
			.subscribe((orders) => {
				const found = orders.find((order) => order.id == this.id)
				if (found) this.order = found
				else alert('Order not found')
			})
			.unsubscribe()
	}
}
