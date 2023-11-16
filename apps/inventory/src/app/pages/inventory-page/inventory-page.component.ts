import { BlockquoteComponent } from '@angular-monorepo/blockquote'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { ButtonComponent } from '@angular-monorepo/button'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'angular-monorepo-inventory-page',
	standalone: true,
	imports: [CommonModule, BlockquoteComponent, ButtonComponent, RouterLink],
	templateUrl: './inventory-page.component.html',
	styleUrls: ['./inventory-page.component.scss'],
})
export class InventoryPageComponent {}
