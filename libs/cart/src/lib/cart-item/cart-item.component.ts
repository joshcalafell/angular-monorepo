/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-cart-item',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
	@Input() item: any = {}
	@Input() index = 0
	@Output() removeItem = new EventEmitter()
	@Output() addItem = new EventEmitter()

	removeItemFromCart(item: any): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[CartItem] removeItemFromCart', item)
		this.removeItem.emit(item)
	}

	addItemToCart(item: any): void {
		console.log('[CartItem] addItemToCart', item)
		this.addItem.emit(item)
	}
}
