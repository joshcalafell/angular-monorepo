export class InventoryItem {
	constructor(
		public id?: number,
		public name?: string,
		public description?: string,
		public price?: number,
		public imageUrl?: string,
		public inventoryDate?: Date,
		public starRating?: number,
		public quantity?: number,
		public inventoryStatus?: string,
		public dimensions?: string,
		public waxType?: string,
		public weight?: string,
		public wickType?: string,
		public burnTime?: string,
		public inCart?: boolean
	) {}
}
