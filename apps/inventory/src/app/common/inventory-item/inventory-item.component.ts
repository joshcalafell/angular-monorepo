import { CommonModule } from '@angular/common'
import { Component, Input, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { InventoryItem } from '../../service/inventory/inventory.model'
import { ButtonComponent } from '@angular-monorepo/button'
import { InventoryService } from '../../service/inventory/inventory.service'

@Component({
	selector: 'angular-monorepo-inventory-item',
	standalone: true,
	imports: [CommonModule, RouterLink, ButtonComponent],
	templateUrl: './inventory-item.component.html',
	styleUrls: ['./inventory-item.component.scss'],
})
export class InventoryItemComponent {
	@Input() item: InventoryItem = {} as InventoryItem
	private inventoryService = inject(InventoryService)

	addToCart(item: InventoryItem): void {
		this.inventoryService.addToCart(item)
		console.log('addToCart', item)
	}

	// TODO: Implement me!
	addToBackorder(item: InventoryItem): void {
		console.log('addToBackorder', item)
	}
}
