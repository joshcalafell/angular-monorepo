import { Injectable } from '@angular/core'
import { data } from './order.data'
import { Order } from './order.model'

@Injectable({
	providedIn: 'root',
})
export class OrdersService {
	items: Order[] = JSON.parse(data) // Temp for now...
	cart: Order[] = []

	constructor() {
		console.log(`'OrderService constructor'`)
	}
}
