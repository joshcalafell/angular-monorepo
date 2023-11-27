import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-cart-item',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {}
