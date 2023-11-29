/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartItemComponent } from '../cart-item/cart-item.component'
import { RouterLink } from '@angular/router'

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

	@Output() removeItem = new EventEmitter()
	@Output() addItem = new EventEmitter()

	ngOnInit(): void {
		console.log('[Cart] ngOnInit', this.cartItems)
		this.total = this.cartItems.reduce(
			(acc, item) => acc + Number(item.price),
			0
		)
	}

	removeItemFromCart(item: unknown): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[Cart] removeItemFromCart', item)
		this.removeItem.emit(item)
	}

	addItemToCart(item: unknown): void {
		console.log('[Cart] addToCart', item)
		this.addItem.emit(item)
	}
}
