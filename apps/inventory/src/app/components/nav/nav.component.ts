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
			path: '/inventory',
			name: 'Inventory',
		},
		{
			path: '/testimonials',
			name: 'Testimonials',
		},
		{
			path: '/orders',
			name: 'Orders',
		},
	]

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	trackByFn(index: number, item: unknown): number {
		return index
	}
}
