import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'

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
export class InventoryPageComponent implements OnInit {
	private inventoryService = inject(InventoryService)

	items = [] as InventoryItem[]

	constructor() {}

	ngOnInit(): void {
		this.items = this.inventoryService.items
	}
}
