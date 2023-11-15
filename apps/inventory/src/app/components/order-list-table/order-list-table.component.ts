import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Order } from '../../models/order.model'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'angular-monorepo-order-list-table',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './order-list-table.component.html',
	styleUrls: ['./order-list-table.component.scss'],
})
export class OrderListTableComponent implements OnInit {
	@Input() orders: Order[] = []
	sortedByIdAsc = true
	sortedByTotalAsc = true

	lastSortedBy = 'id'

	sorted = false

	sortedOrders: Order[] = []

	ngOnInit(): void {
		this.sortedOrders = this.orders
	}

	sortOrdersById() {
		this.sorted = true
		this.lastSortedBy = 'id'
		this.sortedByIdAsc = !this.sortedByIdAsc
		this.orders.sort((a, b) => (this.sortedByIdAsc ? a.id - b.id : b.id - a.id))
	}

	sortOrdersByTotal() {
		this.sorted = true
		this.lastSortedBy = 'total'
		this.sortedByTotalAsc = !this.sortedByTotalAsc
		this.orders.sort((a, b) => {
			return this.sortedByTotalAsc
				? a.order_total - b.order_total
				: b.order_total - a.order_total
		})
	}
}
