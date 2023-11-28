import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InventoryDetailComponent } from './inventory-detail.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ActivatedRoute } from '@angular/router'
import { InventoryService } from '../../service/inventory/inventory.service'
import { of } from 'rxjs'

describe('InventoryDetailComponent', () => {
	let component: InventoryDetailComponent
	let fixture: ComponentFixture<InventoryDetailComponent>

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
			imports: [RouterTestingModule.withRoutes([]), InventoryDetailComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: InventoryService, useValue: mockService },
			],
		}).compileComponents()

		fixture = TestBed.createComponent(InventoryDetailComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
