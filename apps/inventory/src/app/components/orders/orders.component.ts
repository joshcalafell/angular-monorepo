import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OrderListTableComponent } from '../order-list-table/order-list-table.component'
import { OrderListComponent } from '../order-list/order-list.component'

@Component({
	selector: 'angular-monorepo-orders',
	standalone: true,
	imports: [CommonModule, OrderListComponent, OrderListTableComponent],
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {}
