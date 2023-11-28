import { Component } from '@angular/core'
import { CommonModule, NgFor } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
	selector: 'angular-monorepo-nav',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, NgFor],
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
	title = 'GENESIS CANDLES'
	links = [
		{
			path: '/about',
			name: 'About',
		},
		{
			path: '/testimonials',
			name: 'Testimonials',
		},
		{
			path: '/inventory',
			name: 'Inventory',
		},
		{
			path: '/orders',
			name: 'Orders',
		},
		{
			path: '/cart',
			name: 'Cart',
		},
	]

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	trackByFn(index: number, item: unknown): number {
		// console.log('trackByFn', index, item)
		return index
	}
}
