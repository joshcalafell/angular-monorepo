import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WishlistItemComponent } from '../wishlist-item/wishlist-item.component'

@Component({
	selector: 'angular-monorepo-wishlist',
	standalone: true,
	imports: [CommonModule, WishlistItemComponent],
	templateUrl: './wishlist.component.html',
	styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
	@Input() items: Array<{ inWishlist: boolean }> = []
	@Input() total = 0

	@Output() removeItemEmitter = new EventEmitter()
	@Output() wishlistItemEmitter = new EventEmitter()

	ngOnInit(): void {
		this.items = this.items.filter(
			(item: { inWishlist: boolean }) => item.inWishlist as boolean
		)
	}

	wishlistItemHandler(item: unknown): void {
		// TODO: Implement
		console.log('[Cart] addToCart', item)
	}

	removeItemHandler(item: unknown): void {
		// Implement the logic to remove an item from the cart
		// You might want to use a service to manage the cart state
		// For simplicity, I'm emitting an event to the parent component
		// which should handle the removal logic
		console.log('[Cart] removeItemFromCart', item)
		this.removeItemEmitter.emit(item)
	}
}
