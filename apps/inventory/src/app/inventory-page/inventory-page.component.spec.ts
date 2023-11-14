import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InventoryPageComponent } from './inventory-page.component'
import { BlockquoteComponent } from '@angular-monorepo/blockquote'
import { OrdersComponent } from '../orders/orders.component'
import { ButtonComponent } from '@angular-monorepo/button'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

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
				RouterTestingModule.withRoutes([]),
				InventoryPageComponent,
				BlockquoteComponent,
				OrdersComponent,
				ButtonComponent,
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
