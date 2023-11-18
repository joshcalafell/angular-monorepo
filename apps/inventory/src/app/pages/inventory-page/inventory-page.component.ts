import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'

import { RouterLink } from '@angular/router'
import { HeaderComponent } from '../../components/header/header.component'
import { InventoryService } from '../../service/inventory/inventory.service'

@Component({
	selector: 'angular-monorepo-inventory-page',
	standalone: true,
	imports: [CommonModule, HeaderComponent, RouterLink],
	templateUrl: './inventory-page.component.html',
	styleUrls: ['./inventory-page.component.scss'],
	providers: [InventoryService, RouterLink],
})
export class InventoryPageComponent {
	router = inject(RouterLink)
	inventoryService = inject(InventoryService)
	$inventory = this.inventoryService.$inventory
}
