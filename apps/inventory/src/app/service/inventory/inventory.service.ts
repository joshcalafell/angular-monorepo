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

	removeFromCart(item: InventoryItem) {
		console.log('[InventoryService] removeFromCart', item)
		this.cart = [
			...this.cart.slice(0, this.cart.indexOf(item)),
			...this.cart.slice(this.cart.indexOf(item) + 1),
		]
	}
}
