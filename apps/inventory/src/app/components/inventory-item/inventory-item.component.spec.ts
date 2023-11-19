import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InventoryItemComponent } from './inventory-item.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ActivatedRoute } from '@angular/router'
import { InventoryItem } from '../../service/inventory/inventory.model'

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

	const mockItem: InventoryItem = {
		id: 1,
		name: 'test',
		description: 'test',
		price: 1,
		quantity: 1,
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [InventoryItemComponent, RouterTestingModule.withRoutes([])],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(InventoryItemComponent)
		component = fixture.componentInstance
		component.item = mockItem as InventoryItem
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render item-title', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('.item-title')?.textContent).toContain(
			mockItem.name
		)
	})

	it('should render item-cost-pill', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('.item-cost-pill')?.textContent).toContain(
			'$' + mockItem.price
		)
	})
})
