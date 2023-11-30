import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InventoryItemComponent } from './inventory-item.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ActivatedRoute } from '@angular/router'
import { InventoryItem } from '../../service/inventory/inventory.model'

describe('InventoryItemComponent', () => {
	let component: InventoryItemComponent
	let fixture: ComponentFixture<InventoryItemComponent>

	const fakeActivatedRoute = {
		snapshot: {
			data: {},
			params: { id: 1 },
			queryParams: { id: 1 },
			fragment: {},
			outlet: {},
		},
	}

	const mockItem: InventoryItem = {
		id: 1,
		name: 'Test Item',
		description: 'Test Description',
		price: 1,
		quantity: 1,
		imageUrl: 'https://via.placeholder.com/150',
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

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [InventoryItemComponent, RouterTestingModule.withRoutes([])],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(InventoryItemComponent)
		component = fixture.componentInstance
		component.item = mockItem as InventoryItem
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render name as h2', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h2')?.textContent).toContain(mockItem.name)
	})

	it('should render see details button', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(
			compiled.querySelector('button.btn-add-to-cart')?.textContent
		).toContain('See Details')
	})
})
