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
				this.cartItems = inventory.filter((item) => !item.inCart)
				this.total = this.cartItems.reduce(
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					(total, item) => total + 17.5,
					0
				)
			}
		})
	}

	removeItemFromCart() {}
}
