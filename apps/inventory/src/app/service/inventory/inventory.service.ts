import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { InventoryItem, fillWithRandomData } from './inventory.model'

@Injectable({
	providedIn: 'root',
})
export class InventoryService {
	$inventory: Observable<InventoryItem[]> = new Observable<InventoryItem[]>()

	constructor() {
		const inventory = fillWithRandomData(10)
		this.$inventory = new Observable<InventoryItem[]>((observer) => {
			observer.next(inventory)
		})
	}

	removeFromCart(item: InventoryItem) {
		console.log('[InventoryService] removeFromCart', item)
	}
}
