import { TableSortComponent } from '@angular-monorepo/table'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Order } from '../../service/orders/order.model'
import { OrdersService } from '../../service/orders/orders.service'
import { RouterLink } from '@angular/router'

export type DisplayColumns =
	| 'id'
	| 'order_number'
	| 'customer_name'
	| 'order_date'
	| 'order_status'
	| 'order_total'
	| 'action'

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
	imports: [CommonModule, TableSortComponent, RouterLink],
	templateUrl: './orders-page.component.html',
	styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
	title = '- Recent Orders'
	orders: Order[] = []

	sortedByIdAsc = true
	sortedByTotalAsc = true
	sortedByNameAsc = true
	sortedByDateAsc = true
	sortedByStatus = true

	lastSortedBy = 'id'

	sorted = false

	sortedOrders: Order[] = []

	displayedColumns: Column[] = [
		{
			title: 'Order ID',
			column_key: 'id',
			sortable: true,
			sortDirections: ['asc', 'desc'],
			sortFn: () => this.sortOrdersById(),
		},
		{
			title: 'Customer Name',
			column_key: 'customer_name',
			sortable: true,
			sortDirections: ['asc', 'desc'],
			sortFn: () => this.sortOrdersByName(),
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

		{
			title: 'Action',
			column_key: 'order_number',
			sortable: false,
			sortDirections: [],
			sortFn: () => {},
		},
	]

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

	sortOrdersById() {
		this.sorted = true
		this.lastSortedBy = 'id'
		this.sortedByIdAsc = !this.sortedByIdAsc
		this.orders.sort((a, b) => (this.sortedByIdAsc ? a.id - b.id : b.id - a.id))
	}

	sortOrdersByName() {
		this.sorted = true
		this.lastSortedBy = 'customer_name'
		this.sortedByNameAsc = !this.sortedByNameAsc
		this.orders.sort((a, b) => {
			return this.sortedByNameAsc
				? a.customer_name
						.split(' ')[1]
						.localeCompare(b.customer_name.split(' ')[1])
				: b.customer_name
						.split(' ')[1]
						.localeCompare(a.customer_name.split(' ')[1])
		})
	}

	sortOrdersByDate() {
		this.sorted = true
		this.lastSortedBy = 'order_date'
		this.sortedByDateAsc = !this.sortedByDateAsc
		this.orders.sort((a, b) => {
			return this.sortedByDateAsc
				? a.order_date.getTime() - b.order_date.getTime()
				: b.order_date.getTime() - a.order_date.getTime()
		})
	}

	sortOrdersByStatus(): void {
		this.sorted = true
		this.lastSortedBy = 'order_status'
		this.sortedByStatus = !this.sortedByStatus
		this.orders.sort((a, b): number => {
			return this.sortedByStatus
				? a.order_status.localeCompare(b.order_status)
				: b.order_status.localeCompare(a.order_status)
		})
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
