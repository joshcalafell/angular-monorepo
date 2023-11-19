import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { InventoryItem } from './inventory.model'

const coolCandleNames: string[] = [
	'Apple Cinnamon',
	'Autumn Leaves',
	'Autumn Wreath',
	'Bahama Breeze',
	'Beach Walk',
	'Black Cherry',
	'Black Coconut',
	'Black Sand Beach',
	'Blueberry Scone',
	'Brown Sugar & Cinnamon',
	'Bubble Gum',
	'Buttercream',
	'Cactus Flower',
	'Caramel Apple',
	'Champagne Toast',
	'Cherry Blossom',
	'Chocolate Layer Cake',
	'Christmas Cookie',
	'Cinnamon Stick',
	'Clean Cotton',
	'Coconut Sandalwood',
	'Coconut Splash',
	'Coffee Shop',
	'Cotton Candy',
	'Country Apple',
	'Crushed Candy Cane',
	'Dark Chocolate Mint',
	'Driftwood',
	'Endless Weekend',
	'Eucalyptus',
	'Fresh Cut Roses',
	'Fresh Sparkling Snow',
	'Fresh Strawberry Tart',
	'Frosted Cranberry',
	'Frosted Pumpkin',
	'Frozen Lake',
	'Garden Hideaway',
	'Garden Sweet Pea',
	'Gingham',
	'Golden Sands',
	'Harvest Gathering',
	'Hazelnut Coffee',
	'Hibiscus Paradise',
	'Honey Lavender Gelato',
	'Island Margarita',
	'Island Papaya',
	'Island Waterfall',
	'Japanese Cherry Blossom',
	'Juicy Watermelon',
	'Key Lime Pie',
	'Lavender Vanilla',
	'Lemon Lavender',
	'Lemon Mint Leaf',
	'Lemon Verbena',
	'Lilac Blossoms',
	'Mahogany Coconut',
	'Mango Dragonfruit',
	'Mango Mai Tai',
	'Mango Peach Salsa',
	'Marshmallow Fireside',
	'Midnight Blue Citrus',
	'Midnight Jasmine',
	'Midsummer Night',
	'Mint Chocolate',
	'Mint Leaf & Bergamot',
	'Moonlit Garden',
	'Napa Valley Sunset',
	'Ocean Driftwood',
	'Orange Blossom',
	'Orange Creamsicle',
	'Paris Cafe',
	'Parisian Cafe',
	'Peach Bellini',
	'Peach Cobbler',
	'Peach Mango',
	'Pineapple Mango',
	'Pink Apple Punch',
	'Pink Petal Tea Cake',
	'Pink Sands',
	'Pink Watermelon',
	'Pomegranate Lemonade',
	'Pumpkin Apple',
	'Pumpkin Cupcake',
	'Pumpkin Pecan Waffles',
	'Rainforest Gardenia',
	'Rainy Day',
	'Raspberry Mimosa',
	'Red Apple Wreath',
	'Red Velvet Cupcake',
	'Rose Water & Ivy',
	'Salted Caramel',
	'Salted Vanilla',
	'Sea Island Cotton',
	'Seaside Woods',
	'Silver Birch & Lavender',
	'Snow Mountain Lodge',
	'Snowflakes & Citrus',
	'Sparkling Icicles',
	'Sparkling Pear Riesling',
	'Spiced Apple Toddy',
	'Strawberry Pound Cake',
	'Strawberry Vanilla',
	'Sugared Snickerdoodle',
	'Summer Boardwalk',
	'Summer Scoop',
	'Sun-Drenched Apricot Rose',
	'Sunlit Cashmere',
	'Sunrise Woods',
	'Sunset Beach',
	'Sweet Cranberry Pie',
	'Sweet Pea',
	'Tiki Beach',
	'Tis the Season',
	'Twisted Peppermint',
	'Vanilla Bean',
	'Vanilla Birch',
	'Vanilla Chai',
	'Vanilla Pumpkin Marshmallow',
	'Velvet Sugar',
	'Verbena Waters',
	'Warm Apple Pie',
	'Watermelon Lemonade',
]
@Injectable({
	providedIn: 'root',
})
export class InventoryService {
	$inventory: Observable<InventoryItem[]> = new Observable<InventoryItem[]>()

	constructor() {
		const inventory = this.fillWithRandomData(10)
		this.$inventory = new Observable<InventoryItem[]>((observer) => {
			observer.next(inventory)
		})
	}

	fillWithRandomData(count: number) {
		const inventory: InventoryItem[] = []
		for (let i = 0; i < count; i++) {
			inventory.push(
				new InventoryItem(
					i,
					coolCandleNames[Math.floor(Math.random() * coolCandleNames.length)],
					'Item ' + i + ' description',
					Math.floor(Math.random() * 1000),
					'https://via.placeholder.com/350x150',
					new Date(),
					Math.floor(Math.random() * 5),
					Math.floor(Math.random() * 100),
					'In Stock',
					'10 x 10 x 10',
					'Paraffin',
					'10 oz',
					'Wood',
					'10 hours'
				)
			)
		}

		return inventory
	}
}
