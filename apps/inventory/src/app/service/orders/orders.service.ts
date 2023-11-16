import { Injectable } from '@angular/core'
import { Order, OrderStatus } from './order.model'
import { randomFirstNames, randomLastNames } from './orders.data'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class OrdersService {
	$orders: Observable<Order[]> = new Observable<Order[]>()

	constructor() {
		const orders = this.fillWithRandomData(10)
		this.$orders = new Observable<Order[]>((observer) => {
			observer.next(orders)
		})
	}

	generateRandomName(): string {
		const names = []

		for (let i = 0; i < 30; i++) {
			let name = ''
			name += randomFirstNames[i] + ' ' + randomLastNames[i]
			names.push(name)
		}

		return names[Math.floor(Math.random() * names.length)]
	}

	getRandomOrderStatus(): string {
		return OrderStatus[Math.floor(Math.random() * 17) + 1]
	}

	getRandomDateWithinPastYear(): Date {
		const currentDate = new Date()
		const pastDate = new Date()
		pastDate.setFullYear(currentDate.getFullYear() - 1)

		const timeDiff = currentDate.getTime() - pastDate.getTime()
		const randomTime = pastDate.getTime() + Math.random() * timeDiff

		return new Date(randomTime)
	}

	fillWithRandomData = (itemCount: number): Order[] => {
		const orders: Order[] = []

		for (let i = 0; i < itemCount; i++) {
			const randomStatus: string = this.getRandomOrderStatus()
				.split(/(?=[A-Z])/)
				.join(' ')
			const randomDateWithinPastYear = this.getRandomDateWithinPastYear()
			const randomName = this.generateRandomName()
			orders.push(
				new Order(
					i + (i + 1) * 100,
					'321645987',
					randomName,
					randomDateWithinPastYear,
					randomStatus,
					Math.floor(Math.random() * 100)
				)
			)
		}
		return orders
	}
}
