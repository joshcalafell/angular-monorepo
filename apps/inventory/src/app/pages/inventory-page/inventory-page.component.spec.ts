import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { InventoryPageComponent } from './inventory-page.component'
import { InventoryItemComponent } from '../../components/inventory-item/inventory-item.component'

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

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				InventoryPageComponent,
				InventoryItemComponent,
				RouterLink,
			],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(InventoryPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
