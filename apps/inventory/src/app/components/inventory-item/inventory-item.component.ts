import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
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
	data: InventoryItem[] = Array(30)
		.fill(null)
		.map(
			(_, i) =>
				new InventoryItem(
					i,
					'Candle Set',
					'Set of 3 candles',
					33,
					'./assets/images/candle-set.jpg',
					new Date(),
					5,
					3,
					'Available',
					'30x10x5 cm',
					'Parafin, Soy Wax, Glass',
					'440g',
					'Hemp Rope, Paper, Cardboard',
					'24 Hours'
				)
		)
}
