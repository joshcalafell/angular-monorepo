import { ComponentFixture, TestBed } from '@angular/core/testing'
import { OrderListTableComponent } from './order-list-table.component'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('OrderListTableComponent', () => {
	let component: OrderListTableComponent
	let fixture: ComponentFixture<OrderListTableComponent>

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
			imports: [RouterTestingModule.withRoutes([]), OrderListTableComponent],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(OrderListTableComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
