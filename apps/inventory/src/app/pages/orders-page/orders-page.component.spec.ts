import { TableSortComponent } from '@angular-monorepo/table'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { OrdersService } from '../../service/orders/orders.service'
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
		cart: [
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

	it('should render h2', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h2')?.textContent).toContain('Orders')
	})
})
