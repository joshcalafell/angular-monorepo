import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { InventoryItem } from './inventory.model'

@Injectable({
	providedIn: 'root',
})
export class InventoryService {
	$inventory: Observable<InventoryItem[]> = new Observable<InventoryItem[]>()

	constructor() {
		const inventory = this.fillWithRandomData(10)
		this.$inventory = new Observable<InventoryItem[]>((observer) => {
			observer.next(inventory)
		})
	}

	fillWithRandomData(count: number) {
		const inventory: InventoryItem[] = []
		for (let i = 0; i < count; i++) {
			inventory.push(
				new InventoryItem(
					i,
					'Item ' + i,
					'Item ' + i + ' description',
					Math.floor(Math.random() * 1000),
					'https://picsum.photos/200/300',
					new Date(),
					Math.floor(Math.random() * 5),
					Math.floor(Math.random() * 100),
					'In Stock',
					'10 x 10 x 10',
					'Paraffin',
					'10 oz',
					'Wood',
					'10 hours'
				)
			)
		}

		return inventory
	}
}
