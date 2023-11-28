import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'

import { CartComponent } from '@angular-monorepo/cart'
import { RouterLink } from '@angular/router'
import { HeaderComponent } from '../../components/header/header.component'
import { InventoryItemComponent } from '../../components/inventory-item/inventory-item.component'
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
	items = inject(InventoryService).items
}
