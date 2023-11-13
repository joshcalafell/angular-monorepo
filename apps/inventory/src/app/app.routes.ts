import { OrdersComponent } from '@angular-monorepo/orders'
import { ProductsComponent } from '@angular-monorepo/products'
import { Route } from '@angular/router'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'inventory',
		pathMatch: 'full',
	},
	{
		path: 'inventory',
		component: ProductsComponent,
	},
	{
		path: 'orders',
		component: OrdersComponent,
	},
]
