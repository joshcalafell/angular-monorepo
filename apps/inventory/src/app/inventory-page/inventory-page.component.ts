import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlockquoteComponent } from '@angular-monorepo/blockquote'

@Component({
	selector: 'angular-monorepo-inventory-page',
	standalone: true,
	imports: [CommonModule, BlockquoteComponent],
	templateUrl: './inventory-page.component.html',
	styleUrls: ['./inventory-page.component.css'],
})
export class InventoryPageComponent {}
