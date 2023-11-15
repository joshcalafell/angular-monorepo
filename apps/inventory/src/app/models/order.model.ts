export enum OrderStatus {
	Processing = 1,
	InTransit = 2,
	Fulfilled = 3,
	Pending = 4,
	Cancelled = 5,
	Returned = 6,
	Delivered = 7,
	AwaitingPayment = 8,
	AwaitingPickup = 9,
	AwaitingShipment = 10,
	Completed = 11,
	Closed = 12,
	Shipped = 13,
	Disputed = 14,
	VerificationRequired = 15,
	PartiallyShipped = 16,
	Refunded = 17,
}

export class Order {
	constructor(
		public id: number,
		public customer_name: string,
		public order_date: Date,
		public order_status: string,
		public order_total: number
	) {
		this.id = id
		this.order_date = order_date
		this.order_status = order_status
		this.order_total = order_total
	}
}
