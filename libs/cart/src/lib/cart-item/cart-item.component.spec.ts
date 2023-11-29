import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CartItemComponent } from './cart-item.component'

describe('CartItemComponent', () => {
	let component: CartItemComponent
	let fixture: ComponentFixture<CartItemComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CartItemComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(CartItemComponent)
		component = fixture.componentInstance

		component.item = {
			id: 1,
			name: 'Test Item',
			description: 'A test item',
			price: 100,
			quantity: 1,
			image: 'https://via.placeholder.com/150',
		}

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('has button for removing item', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button.btn-add')).toBeTruthy()
	})

	it('has button for wishlisting item', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button.btn-wishlist')).toBeTruthy()
	})

	it('should emit remove event', () => {
		const spy = jest.spyOn(component.removeItemEmitter, 'emit')
		component.removeItemHandler({
			id: 1,
			name: 'Candle',
			description: 'A candle',
			price: 10,
			quantity: 1,
			image: 'https://via.placeholder.com/150',
		})
		expect(spy).toHaveBeenCalled()
	})

	it('should emit add to wishlist event', () => {
		const spy = jest.spyOn(component.wishlistItemEmitter, 'emit')
		component.wishlistItemHandler({
			id: 1,
			name: 'Candle',
			description: 'A candle',
			price: 10,
			quantity: 1,
			image: 'https://via.placeholder.com/150',
		})
		expect(spy).toHaveBeenCalled()
	})

	it('should render name as p', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('p.name')?.textContent).toContain('Test Item')
	})

	it('should render price as p', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('p.price')?.textContent).toContain(
			'$' + component.item.price + '.00'
		)
	})
})
