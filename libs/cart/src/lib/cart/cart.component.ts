/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { RouterLink } from '@angular/router'
import { CartItemComponent } from '../cart-item/cart-item.component'

@Component({
	selector: 'angular-monorepo-cart',
	standalone: true,
	imports: [CommonModule, CartItemComponent, RouterLink],
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
	@Input() cartItems: any[] = []
	@Input() total = 0

	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()

	ngOnInit(): void {
		console.log('[Cart] ngOnInit', this.cartItems)
		this.calculateTotal()
	}
	calculateTotal() {
		this.total = this.cartItems.reduce(
			(acc, item) => acc + Number(item.price) * item.quantityInCart,
			0
		)
	}

	removeItemHandler(item: unknown): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[Cart] removeItemFromCart', item)
		this.removeItemEmitter.emit(item)
		this.calculateTotal()
	}

	wishlistItemHandler(item: unknown): void {
		// TODO: Implement
		console.log('[Cart] addToCart', item)
	}
}
