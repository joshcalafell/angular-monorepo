import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { OrdersService } from '../../service/orders/orders.service'
import { OrdersPageComponent } from './orders-page.component'
import { TableSortComponent } from '@angular-monorepo/table'

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

	const mockService = { $orders: of([]) }

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([]),
				OrdersPageComponent,
				TableSortComponent,
			],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: OrdersService, useValue: mockService },
			],
		}).compileComponents()

		fixture = TestBed.createComponent(OrdersPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
