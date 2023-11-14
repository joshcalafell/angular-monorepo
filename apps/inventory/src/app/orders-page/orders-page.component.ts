/* eslint-disable @nx/enforce-module-boundaries */

import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { OrdersComponent } from '../orders/orders.component'

@Component({
	selector: 'angular-monorepo-orders-page',
	standalone: true,
	imports: [CommonModule, OrdersComponent],
	templateUrl: './orders-page.component.html',
	styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent {}
