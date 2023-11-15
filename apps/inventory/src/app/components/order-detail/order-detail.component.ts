import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Order } from '../../service/orders/order.model'

@Component({
	selector: 'angular-monorepo-order-detail',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent {
	title = '- Order Detail'
	order: Order = {} as Order
}
