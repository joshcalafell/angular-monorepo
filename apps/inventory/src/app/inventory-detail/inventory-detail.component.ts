import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { InventoryItem } from '../service/inventory/inventory.model'
import { InventoryService } from '../service/inventory/inventory.service'
import { HeaderComponent } from '../components/header/header.component'

@Component({
	selector: 'angular-monorepo-inventory-detail',
	standalone: true,
	imports: [CommonModule, HeaderComponent],
	templateUrl: './inventory-detail.component.html',
	styleUrls: ['./inventory-detail.component.scss'],
})
export class InventoryDetailComponent implements OnInit {
	private inventoryService = inject(InventoryService)
	private activatedRoute = inject(ActivatedRoute)

	private router = inject(Router)

	item: InventoryItem = {} as InventoryItem

	sampleDate: string = new Date('12/31/2023').toISOString()

	ngOnInit(): void {
		const id = this.activatedRoute.snapshot.params['id']
		try {
			this.inventoryService.$inventory.subscribe((orders: InventoryItem[]) => {
				const found = orders.find((order) => order.id === id)
				if (found) this.item = found
			})
		} catch (error) {
			console.error(error)
			this.router.navigate(['/404'])
		}
	}
}
