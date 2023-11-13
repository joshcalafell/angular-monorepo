/* eslint-disable @nx/enforce-module-boundaries */
import { OrdersComponent } from '@angular-monorepo/orders'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
	selector: 'angular-monorepo-orders-page',
	standalone: true,
	imports: [CommonModule, OrdersComponent],
	templateUrl: './orders-page.component.html',
	styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent {}
