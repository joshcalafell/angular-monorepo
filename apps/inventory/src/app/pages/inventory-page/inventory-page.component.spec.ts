import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { InventoryItemComponent } from '../../components/inventory-item/inventory-item.component'
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
			imports: [RouterTestingModule, RouterLink, InventoryItemComponent],
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
})
