import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Order } from '../../service/orders/order.model'
import { OrdersService } from '../../service/orders/orders.service'
import { HeaderComponent } from '../header/header.component'

@Component({
	selector: 'angular-monorepo-order-detail',
	standalone: true,
	imports: [CommonModule, HeaderComponent],
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
	private orderService = inject(OrdersService)
	private activatedRoute = inject(ActivatedRoute)
	private router = inject(Router)
	order: Order = {} as Order

	ngOnInit(): void {
		const id = this.activatedRoute.snapshot.params['id']

		try {
			this.orderService.$orders.subscribe((orders: Order[]) => {
				const found = orders.find((order) => order.id === id)
				if (found) this.order = found
			})
		} catch (error) {
			console.error(error)
			this.router.navigate(['/orders'])
		}
	}
}
