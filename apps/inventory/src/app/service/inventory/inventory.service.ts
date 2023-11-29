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

	addToCart(item: InventoryItem) {
		this.cart.push(item)
		console.log('[InventoryService] addToCart', item)
	}

	removeFromCart(id: number) {
		console.log('[InventoryService] removeFromCart', id)
		const idx = this.cart.findIndex((item) => item.id === id)
		try {
			if (idx) {
				console.log('[InventoryService] removeFromCart', id)
				const idx = this.cart.findIndex((item) => item.id === id)
				if (idx >= 0)
					this.cart = [
						...this.cart.splice(0, idx),
						...this.cart.splice(idx + 1),
					]
			} else throw new Error('Item not found')
		} catch (error) {
			console.log(error)
		}
	}
}
