import { Route } from '@angular/router'
import { InventoryPageComponent } from './inventory-page/inventory-page.component'
import { OrdersPageComponent } from './orders-page/orders-page.component'
import { AboutPageComponent } from './about-page/about-page.component'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'about',
		pathMatch: 'full',
	},
	{
		path: 'about',
		component: AboutPageComponent,
	},
	{
		path: 'inventory',
		component: InventoryPageComponent,
	},
	{
		path: 'orders',
		component: OrdersPageComponent,
	},
]
