import { Injectable } from '@angular/core'
import { InventoryItem } from './inventory.model'
import { data } from './inventory.mock'
@Injectable({
	providedIn: 'root',
})
export class InventoryService {
	items: InventoryItem[] = JSON.parse(data)

	constructor() {
		console.log(`'InventoryService constructor'`)
	}

	getItem(id: number) {
		return this.items.find((item) => item.id == id)
	}

	addToCart(item: InventoryItem) {
		if (item.quantity > 0) {
			item.quantity--
			console.log('[InventoryService] addToCart', item)
			item.quantityInCart++
		}
	}

	clearCart() {
		this.items.forEach((item) => {
			if (item.quantityInCart > 0) {
				item.quantity += item.quantityInCart
			}
		})
	}

	clearWishlist() {
		this.items.forEach((item) => {
			if (item.quantityInCart > 0) {
				item.quantity += item.quantityInCart
			}
		})
	}

	removeFromCart(id: number) {
		const item = this.getItem(id)
		if (item) {
			item.quantity++
			item.quantityInCart--
		}
	}

	addToWishlist(item: InventoryItem) {
		if (item.inWishlist === false) {
			console.log('[InventoryService] addToWishlist', item)
			item.inWishlist = true
		}
	}

	removeFromWishlist(item: InventoryItem) {
		if (item.inWishlist === true) {
			console.log('[InventoryService] removeFromWishlist', item)
			item.inWishlist = false
		}
	}
}
