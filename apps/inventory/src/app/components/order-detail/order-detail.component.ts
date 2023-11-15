import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
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
	title = '- Order Detail'
	order: Order = {} as Order

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private service: OrdersService
	) {}

	ngOnInit(): void {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		this.route.params.subscribe((params: any) => {
			const id = params.id
			this.order = this.service
				.mockOrders()
				.find((order) => order.id === id) as Order
			console.log(this.order)
		})
	}
}
