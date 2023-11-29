import { Injectable } from '@angular/core'
import { InventoryItem } from './inventory.model'
import { data } from './inventory.mock'
@Injectable({
	providedIn: 'root',
})
export class InventoryService {
	items: InventoryItem[] = JSON.parse(data)
	cart: InventoryItem[] = []
	constructor() {
		console.log(`'InventoryService constructor'`)
	}

	getItem(id: number) {
		return this.items.find((item) => item.id == id)
	}

	addToCart(item: InventoryItem) {
		this.cart.push(item)
		console.log('[InventoryService] addToCart', item)
	}

	removeFromCart(id: number) {
		console.log('[InventoryService] removeFromCart', id)
		const idx = Number(this.cart.findIndex((item) => item.id == id))
		try {
			if (idx != 0) {
				console.log('[InventoryService] removeFromCart', idx)
				const newCart = [
					...this.cart.slice(0, idx),
					...this.cart.slice(idx + 1),
				]
				this.cart = newCart
			} else if (idx == 0) {
				console.log('[InventoryService] removeFromCart', idx)
				const newCart = [...this.cart.slice(idx + 1)]
				this.cart = newCart
			} else throw new Error('Item not found')
		} catch (error) {
			console.log(error)
		}
	}

	addToWishlist(item: InventoryItem) {
		console.log('[InventoryService] addToWishlist', item)
	}
}
