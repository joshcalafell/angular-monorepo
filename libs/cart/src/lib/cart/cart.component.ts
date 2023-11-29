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
	total = 0

	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()
	@Output() clearCartEmitter = new EventEmitter()

	ngOnInit(): void {
		this.total = this.getCartTotal(this.cartItems)
	}

	getCartTotal(items: any[]): number {
		return items.reduce((acc, item) => acc + Number(item.price), 0)
	}

	removeItemHandler(item: unknown): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[Cart] removeItemHandler', item)
		this.removeItemEmitter.emit(item)
	}

	// TODO: Implement
	wishlistItemHandler(item: unknown): void {
		console.log('[Cart] wishlistItemHandler', item)
	}

	// TODO: Implement
	clearCartHandler() {
		console.log('[Cart] clearCartHandler')
		this.clearCartEmitter.emit()
	}
}
