import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { OrderListTableComponent } from '../order-list-table/order-list-table.component'
import { OrdersComponent } from '../orders/orders.component'
import { OrdersPageComponent } from './orders-page.component'

describe('OrdersPageComponent', () => {
	let component: OrdersPageComponent
	let fixture: ComponentFixture<OrdersPageComponent>

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
				OrdersPageComponent,
				OrdersComponent,
				OrderListTableComponent,
			],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(OrdersPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
