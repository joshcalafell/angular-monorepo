import { Route } from '@angular/router'
import { InventoryDetailComponent } from './routes/inventory-detail/inventory-detail.component'
import { OrderDetailComponent } from './routes/order-detail/order-detail.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { CartPageComponent } from './pages/cart-page/cart-page.component'
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'
import { OrdersPageComponent } from './pages/orders-page/orders-page.component'
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component'

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
		path: 'testimonials',
		component: TestimonialsPageComponent,
	},
	{
		path: 'inventory',
		component: InventoryPageComponent,
	},
	{
		path: 'inventory/detail/:id',
		component: InventoryDetailComponent,
	},
	{
		path: 'orders',
		component: OrdersPageComponent,
	},
	{
		path: 'orders/detail/:id',
		component: OrderDetailComponent,
	},
	{
		path: 'cart',
		component: CartPageComponent,
	},
	/* 	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},*/
	{
		path: '404',
		component: NotFoundPageComponent,
	},
]
