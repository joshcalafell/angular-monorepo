import { Route } from '@angular/router'
import { AboutPageComponent } from './about-page/about-page.component'
import { InventoryPageComponent } from './inventory-page/inventory-page.component'
import { OrdersPageComponent } from './orders-page/orders-page.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { OrderDetailComponent } from './order-detail/order-detail.component'

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
		path: 'inventory/:id',
		component: ProductDetailComponent,
	},
	{
		path: 'orders',
		component: OrdersPageComponent,
	},
	{
		path: 'orders/:id',
		component: OrderDetailComponent,
	},
]
