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
	item: Order = {} as Order

	ngOnInit(): void {
		const { id } = this.activatedRoute.snapshot.params
		try {
			const found =
				this.orderService.items?.find((order) => order.id == id) ||
				({} as Order)
			if (found) this.item = found
			else throw new Error('Item not found')
		} catch (error) {
			console.log(error)
			this.router.navigate(['/404'])
		}
	}
}
