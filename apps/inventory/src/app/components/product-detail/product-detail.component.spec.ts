import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductDetailComponent } from './product-detail.component'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { InventoryService } from '../../service/inventory/inventory.service'
import { RouterTestingModule } from '@angular/router/testing'

describe('ProductDetailComponent', () => {
	let component: ProductDetailComponent
	let fixture: ComponentFixture<ProductDetailComponent>

	const fakeActivatedRoute = {
		snapshot: {
			data: {},
			params: {},
			queryParams: {},
			fragment: {},
			outlet: {},
		},
	} as ActivatedRoute

	const mockService = { $inventory: of([]) }

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule.withRoutes([]), ProductDetailComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: InventoryService, useValue: mockService },
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductDetailComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
