import { CartComponent } from '@angular-monorepo/cart'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { InventoryItem } from '../../service/inventory/inventory.model'
import { InventoryService } from '../../service/inventory/inventory.service'
import { HeaderComponent } from '../../components/header/header.component'

@Component({
	selector: 'angular-monorepo-cart-page',
	standalone: true,
	imports: [CommonModule, CartComponent, HeaderComponent],
	templateUrl: './cart-page.component.html',
	styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
	cartItems: InventoryItem[] = []
	inventoryService = inject(InventoryService)
	total = 0

	constructor() {
		this.inventoryService.$inventory.subscribe((inventory) => {
			if (inventory) {
				this.cartItems = inventory
				console.log('this.cartItems', this.cartItems)
			}
		})
	}

	removeItemFromCart(item: InventoryItem) {
		console.log('removeItemFromCart', item)
		this.inventoryService.removeFromCart(item)
	}
}
