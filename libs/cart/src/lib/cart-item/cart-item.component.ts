/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FadeInOut } from './animations'
import { ButtonComponent } from '@angular-monorepo/button'
@Component({
	selector: 'angular-monorepo-cart-item',
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
	animations: [FadeInOut(200, 200, true)],
})
export class CartItemComponent {
	@Input() item: any = {}
	@Input() index = 0
	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()

	removeItemHandler(item: any): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[CartItem] removeItemFromCart', item)
		this.removeItemEmitter.emit(item)
	}

	wishlistItemHandler(item: any): void {
		console.log('[CartItem] wishlistItemHandler', item)
		this.wishlistItemEmitter.emit(item)
	}
}
