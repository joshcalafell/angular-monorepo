import { Route } from '@angular/router'
import { AboutPageComponent } from './about-page/about-page.component'
import { InventoryPageComponent } from './inventory-page/inventory-page.component'
import { OrdersPageComponent } from './orders-page/orders-page.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'

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
	{
		path: 'testimonials',
		component: TestimonialsPageComponent,
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},
	{
		path: '404',
		component: NotFoundPageComponent,
	},
]
