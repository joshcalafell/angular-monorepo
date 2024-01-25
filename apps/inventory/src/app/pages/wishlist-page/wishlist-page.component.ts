import { Component, OnChanges, SimpleChanges, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '@angular-monorepo/button'
import { InventoryService } from '../../service/inventory/inventory.service'
import { InventoryItem } from '../../service/inventory/inventory.model'
import { WishlistComponent } from '@angular-monorepo/wishlist'

@Component({
	selector: 'angular-monorepo-wishlist-page',
	standalone: true,
	imports: [CommonModule, ButtonComponent, WishlistComponent],
	templateUrl: './wishlist-page.component.html',
	styleUrl: './wishlist-page.component.scss',
})
export class WishlistPageComponent implements OnChanges {
	items: InventoryItem[] = []
	inventoryService = inject(InventoryService)

	constructor() {
		this.updateTemplateTemp()
		this.items = this.items.filter(
			(item: { inWishlist: boolean }) => item.inWishlist as boolean
		)
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('changes', changes)
	}

	updateTemplateTemp() {
		this.items = this.inventoryService.items.filter(
			(item) => item.inWishlist === true
		)
	}

	clearCartHandler() {
		console.log('clearCartHandler')
		this.inventoryService.clearCart()
		this.updateTemplateTemp()
	}

	clearWishlistHandler() {
		console.log('clearWishlistHandler')
		this.inventoryService.clearWishlist()
	}
}
