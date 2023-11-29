import { CartComponent } from '@angular-monorepo/cart'
import { CommonModule } from '@angular/common'
import { Component, OnChanges, SimpleChanges, inject } from '@angular/core'
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
export class CartPageComponent implements OnChanges {
	cartItems: InventoryItem[] = []
	inventoryService = inject(InventoryService)
	total = 0

	constructor() {
		this.cartItems = this.inventoryService.cart
		this.total = this.inventoryService.cart.reduce(
			(acc, item) => acc + Number(item.price),
			0
		)
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
		this.cartItems = this.inventoryService.cart
		this.total = this.inventoryService.cart.reduce(
			(acc, item) => acc + Number(item.price),
			0
		)
	}
}
