import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlockquoteComponent } from '@angular-monorepo/blockquote'
import { OrdersComponent } from '@angular-monorepo/orders'
import { ButtonComponent } from '@angular-monorepo/button'

@Component({
	selector: 'angular-monorepo-inventory-page',
	standalone: true,
	imports: [
		CommonModule,
		BlockquoteComponent,
		OrdersComponent,
		ButtonComponent,
	],
	templateUrl: './inventory-page.component.html',
	styleUrls: ['./inventory-page.component.scss'],
})
export class InventoryPageComponent {
	orders = [
		{
			id: 1,
			name: 'Order 1',
			description: 'Description 1',
		},
		{
			id: 2,
			name: 'Order 2',
			description: 'Description 2',
		},
		{
			id: 3,
			name: 'Order 3',
			description: 'Description 3',
		},
	]
}
