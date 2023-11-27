import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartItemComponent } from '../cart-item/cart-item.component'

@Component({
	selector: 'angular-monorepo-cart',
	standalone: true,
	imports: [CommonModule, CartItemComponent],
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent<T> {
	@Input() cartItems: T[] = []
	@Input() total = 0
	@Output() removeItem = new EventEmitter<T>()

	removeFromCart(item: T): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		this.removeItem.emit(item)
	}
}
