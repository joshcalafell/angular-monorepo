import { ComponentFixture, TestBed } from '@angular/core/testing'
import { OrderDetailComponent } from './order-detail.component'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { OrdersService } from '../../service/orders/orders.service'

describe('OrderDetailComponent', () => {
	let component: OrderDetailComponent
	let fixture: ComponentFixture<OrderDetailComponent>

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
			imports: [RouterTestingModule.withRoutes([]), OrderDetailComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: OrdersService, useValue: {} },
			],
		}).compileComponents()

		fixture = TestBed.createComponent(OrderDetailComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
