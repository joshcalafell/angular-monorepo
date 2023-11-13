import { Route } from '@angular/router'
import { InventoryPageComponent } from './inventory-page/inventory-page.component'
import { OrdersPageComponent } from './orders-page/orders-page.component'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'inventory',
		pathMatch: 'full',
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
