type InventoryStatus =
	| 'InStock'
	| 'LowStock'
	| 'OutOfStock'
	| 'Discontinued'
	| 'BackOrdered'
	| 'PreOrder'
	| 'SoldOut'
	| 'InCart'
	| 'InWishlist'

export class InventoryItem {
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public price: string | number,
		public imageUrl: string,
		public inventoryDate: string,
		public starRating: number,
		public starRatingCount: number,
		public quantity: number,
		public inventoryStatus: InventoryStatus,
		public dimensions: string,
		public waxType: string,
		public weight: string,
		public wickType: string,
		public burnTime: string,
		public inCart: boolean = false,
		public quantityInCart: number = 0
	) {}
}
