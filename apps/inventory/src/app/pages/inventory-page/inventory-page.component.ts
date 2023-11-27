import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { CartComponent } from '@angular-monorepo/cart'
import { RouterLink } from '@angular/router'
import { HeaderComponent } from '../../components/header/header.component'
import { InventoryItemComponent } from '../../components/inventory-item/inventory-item.component'
import { InventoryItem } from '../../service/inventory/inventory.model'
import { InventoryService } from '../../service/inventory/inventory.service'

@Component({
	selector: 'angular-monorepo-inventory-page',
	standalone: true,
	imports: [
		CommonModule,
		HeaderComponent,
		RouterLink,
		InventoryItemComponent,
		CartComponent,
	],
	templateUrl: './inventory-page.component.html',
	styleUrls: ['./inventory-page.component.scss'],
	providers: [InventoryService, RouterLink],
})
export class InventoryPageComponent {
	inventory: InventoryItem[] = {} as InventoryItem[]

	constructor(private inventoryService: InventoryService) {
		this.inventoryService.fillWithRandomData(10)
		this.inventoryService.$inventory.subscribe((inventory) => {
			console.log('inventory', inventory)
			if (inventory) {
				this.inventory = inventory
			}
		})
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	removeItemFromCart(item: InventoryItem) {
		// this.inventoryService.removeItemFromCart(item)
	}
}
