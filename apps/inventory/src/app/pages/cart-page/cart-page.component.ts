import { CartComponent } from '@angular-monorepo/cart'
import { CommonModule } from '@angular/common'
import { Component, OnChanges, SimpleChanges, inject } from '@angular/core'
import { InventoryItem } from '../../service/inventory/inventory.model'
import { InventoryService } from '../../service/inventory/inventory.service'
import { ButtonComponent } from '@angular-monorepo/button'

@Component({
	selector: 'angular-monorepo-cart-page',
	standalone: true,
	imports: [CommonModule, CartComponent, ButtonComponent],
	templateUrl: './cart-page.component.html',
	styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnChanges {
	items: InventoryItem[] = []
	inventoryService = inject(InventoryService)
	total = 0

	constructor() {
		this.updateTemplateTemp()
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('changes', changes)
	}

	removeItemHandler(item: InventoryItem) {
		console.log('removeItemFromCart', item)
		this.inventoryService.removeFromCart(item.id)
		setTimeout(() => this.updateTemplateTemp(), 1.33)
	}

	updateTemplateTemp() {
		this.items = this.inventoryService.items.filter(
			(item) => item.quantityInCart > 0
		)
		this.total = this.items.reduce((acc, item) => acc + Number(item.price), 0)
	}

	clearCartHandler() {
		console.log('clearCartHandler')
		this.inventoryService.clearCart()
		setTimeout(() => this.updateTemplateTemp(), 1.33)
	}
}
