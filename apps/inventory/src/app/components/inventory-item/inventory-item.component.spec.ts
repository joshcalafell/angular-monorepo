import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InventoryItemComponent } from './inventory-item.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ActivatedRoute } from '@angular/router'

describe('InventoryItemComponent', () => {
	let component: InventoryItemComponent
	let fixture: ComponentFixture<InventoryItemComponent>

	const fakeActivatedRoute = {
		snapshot: {
			data: {},
			params: {},
			queryParams: {},
			fragment: {},
			outlet: {},
		},
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [InventoryItemComponent, RouterTestingModule.withRoutes([])],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(InventoryItemComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
