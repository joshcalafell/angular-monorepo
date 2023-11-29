import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { OrdersService } from '../../service/orders/orders.service'
import { OrderDetailComponent } from './order-detail.component'

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
			imports: [RouterTestingModule.withRoutes([]), OrderDetailComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: OrdersService, useValue: mockService },
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
