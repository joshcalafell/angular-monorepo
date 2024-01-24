import { TableSortComponent } from '@angular-monorepo/table'
import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { Order } from '../../service/orders/order.model'
import { OrdersService } from '../../service/orders/orders.service'
import { FromCamelPipe } from '../../pipes/from-camel/from-camel.pipe'

export type DisplayColumns =
	| 'id'
	| 'order_number'
	| 'customer_name'
	| 'order_date'
	| 'order_status'
	| 'order_total'

export interface Column {
	title: string
	column_key: DisplayColumns
	sortable: boolean
	sortDirections: string[]
	sortFn: () => void
}

@Component({
	selector: 'angular-monorepo-orders-page',
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		TableSortComponent,
		RouterLinkActive,
		FromCamelPipe,
	],
	templateUrl: './orders-page.component.html',
	styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
	private orderService = inject(OrdersService)
	title = '- Recent Orders'

	sortedByIdAsc = true
	sortedByTotalAsc = true

	sortedByDateAsc = true
	sortedByStatus = true

	lastSortedBy = 'id'

	items = [] as Order[]

	displayedColumns: Column[] = [
		{
			title: 'Order ID',
			column_key: 'id',
			sortable: true,
			sortDirections: ['asc', 'desc'],
			sortFn: () => this.sortOrdersById(),
		},

		{
			title: 'Order Date',
			column_key: 'order_date',
			sortable: true,
			sortDirections: ['asc', 'desc'],
			sortFn: () => this.sortOrdersByDate(),
		},
		{
			title: 'Order Status',
			column_key: 'order_status',
			sortable: true,
			sortDirections: ['asc', 'desc'],
			sortFn: () => this.sortOrdersByStatus(),
		},
		{
			title: 'Order Total',
			column_key: 'order_total',
			sortable: true,
			sortDirections: ['asc', 'desc'],
			sortFn: () => this.sortOrdersByTotal(),
		},
	]

	constructor() {}

	ngOnInit(): void {
		this.items = this.orderService.items
	}

	sortOrdersById() {
		this.lastSortedBy = 'id'
		this.sortedByIdAsc = !this.sortedByIdAsc
		this.items.sort((a, b) => {
			return this.sortedByIdAsc
				? a.id.localeCompare(b.id)
				: b.id.localeCompare(a.id)
		})
	}

	sortOrdersByDate() {
		this.lastSortedBy = 'order_date'
		this.sortedByDateAsc = !this.sortedByDateAsc
		this.items.sort((a, b) => {
			return this.sortedByDateAsc
				? new Date(a.order_date).getTime() - new Date(b.order_date).getTime()
				: new Date(b.order_date).getTime() - new Date(a.order_date).getTime()
		})
	}

	sortOrdersByStatus(): void {
		this.lastSortedBy = 'order_status'
		this.sortedByStatus = !this.sortedByStatus
		this.items.sort((a, b): number => {
			return this.sortedByStatus
				? a.order_status.localeCompare(b.order_status)
				: b.order_status.localeCompare(a.order_status)
		})
	}

	sortOrdersByTotal() {
		this.lastSortedBy = 'total'
		this.sortedByTotalAsc = !this.sortedByTotalAsc
		this.items.sort((a, b) => {
			return this.sortedByTotalAsc
				? a.order_total - b.order_total
				: b.order_total - a.order_total
		})
	}
}
