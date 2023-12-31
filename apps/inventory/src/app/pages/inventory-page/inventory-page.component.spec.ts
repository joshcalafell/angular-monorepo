import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { InventoryItemComponent } from '../../common/inventory-item/inventory-item.component'
import { InventoryService } from '../../service/inventory/inventory.service'
import { InventoryPageComponent } from './inventory-page.component'

describe('InventoryPageComponent', () => {
	let component: InventoryPageComponent
	let fixture: ComponentFixture<InventoryPageComponent>

	const fakeActivatedRoute = {
		snapshot: {
			data: {},
			params: {},
			queryParams: {},
			fragment: {},
			outlet: {},
		},
	} as ActivatedRoute

	const mockService = {
		items: [
			{
				id: 1,
				name: 'Candle',
				description: 'A candle',
				price: 10,
				quantity: 1,
				image: 'https://via.placeholder.com/150',
			},
		],
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([]),
				InventoryPageComponent,
				InventoryItemComponent,
			],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: InventoryService, useValue: mockService },
			],
		}).compileComponents()

		fixture = TestBed.createComponent(InventoryPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render h2', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h2')?.textContent).toContain('Inventory')
	})
})
