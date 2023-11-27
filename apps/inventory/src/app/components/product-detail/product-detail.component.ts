import { Component, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component'
import { InventoryItem } from '../../service/inventory/inventory.model'
import { InventoryItemComponent } from '../inventory-item/inventory-item.component'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'angular-monorepo-product-detail',
	standalone: true,
	imports: [CommonModule, HeaderComponent, InventoryItemComponent],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
	title = '- Product Detail'
	@Inject('route') router: ActivatedRoute = {} as ActivatedRoute
	@Inject('item') item: InventoryItem = {} as InventoryItem
}
