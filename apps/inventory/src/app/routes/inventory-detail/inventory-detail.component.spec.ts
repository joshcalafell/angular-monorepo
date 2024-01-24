import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { InventoryItem } from '../../service/inventory/inventory.model'
import { InventoryDetailComponent } from './inventory-detail.component'
import { InventoryService } from '../../service/inventory/inventory.service'
import { ButtonComponent } from '@angular-monorepo/button'

describe('InventoryDetailComponent', () => {
	let component: InventoryDetailComponent
	let fixture: ComponentFixture<InventoryDetailComponent>

	const fakeActivatedRoute = {
		snapshot: {
			data: {},
			params: {},
			queryParams: {},
			fragment: {},
			outlet: {},
		},
	} as ActivatedRoute

	const mockItem: InventoryItem = {
		id: 1,
		name: 'Rainbow Sunset',
		description: 'Test Description',
		price: 100,
		quantity: 1000,
		imageUrl: 'http://localhost/assets/images/candle_gray_500x667.png',
		inventoryStatus: 'InStock',
		starRating: 1,
		starRatingCount: 1,
		inventoryDate: '2021-09-01',
		dimensions: '1x1x1',
		waxType: 'Test Wax Type',
		weight: '1lb',
		wickType: 'Test Wick Type',
		burnTime: '1hr',
		inCart: false,
	}

	const mockService: InventoryService = {
		items: [mockItem],
		cart: [],
		getItem: () => {
			return mockItem
		},
		addToCart: () => {},
		clearCart: () => {},
		removeFromCart: () => {},
		addToWishlist: () => {},
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([]),
				InventoryDetailComponent,
				ButtonComponent,
			],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: InventoryService, useValue: mockService },
			],
		}).compileComponents()

		fixture = TestBed.createComponent(InventoryDetailComponent)
		component = fixture.componentInstance
		component.item = mockItem
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should get item', () => {
		expect(component.item).toEqual(mockItem)
	})

	it('should render add to cart button', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('#add-to-cart-1')?.textContent).toContain(
			'Add to Cart'
		)
	})

	it('should render add to wishlist button', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('#add-to-wishlist-1')?.textContent).toContain(
			'Wishlist'
		)
	})

	it('should render name as h2', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h2')?.textContent).toContain(
			'Rainbow Sunset'
		)
	})

	it('should render price as p', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('p.price')?.textContent).toContain(
			'$' + mockItem.price + '.00'
		)
	})

	it('should render quantity as p', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('p.quantity')?.textContent).toContain(
			'1,000 in stock'
		)
	})
})
