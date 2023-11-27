import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { InventoryItem } from '../../service/inventory/inventory.model'

@Component({
	selector: 'angular-monorepo-inventory-item',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './inventory-item.component.html',
	styleUrls: ['./inventory-item.component.scss'],
})
export class InventoryItemComponent {
	mockDate: string = new Date('12/31/2023').toISOString()
	@Input() item: InventoryItem = {} as InventoryItem
}
