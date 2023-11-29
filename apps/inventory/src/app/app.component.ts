import { Component } from '@angular/core'

import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

export interface AppLink {
	name: string
	path: string
	pageTitle?: string
}

@Component({
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		RouterLinkActive,
		RouterOutlet,
		FooterComponent,
		HeaderComponent,
	],
	selector: 'angular-monorepo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'GENESIS CANDLES'

	links: AppLink[] = [
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
			path: '/cart',
			name: 'Cart',
		},
		{
			path: '/orders',
			name: 'Orders',
		},
	]

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	trackByFn(index: number, item: unknown): number {
		// console.log('trackByFn', index, item)
		return index
	}
}
