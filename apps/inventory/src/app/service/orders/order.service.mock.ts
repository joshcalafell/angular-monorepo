import { Observable, of } from 'rxjs'
import { Order } from './order.model'

export class OrdersServiceMock {
	$orders: Observable<Order[]> = of([
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
		new Order(1, '321645987', 'John Doe', new Date(), 'Pending', 1),
	])
}
