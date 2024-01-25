import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '@angular-monorepo/button'

@Component({
	selector: 'angular-monorepo-wishlist-item',
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: './wishlist-item.component.html',
	styleUrl: './wishlist-item.component.scss',
})
export class WishlistItemComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() item: any = {}
	@Input() index = 0
	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	removeItemHandler(item: unknown): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[CartItem] removeItemFromCart', item)
		this.removeItemEmitter.emit(item)
	}

	wishlistItemHandler(item: unknown): void {
		console.log('[CartItem] wishlistItemHandler', item)
		this.wishlistItemEmitter.emit(item)
	}
}
