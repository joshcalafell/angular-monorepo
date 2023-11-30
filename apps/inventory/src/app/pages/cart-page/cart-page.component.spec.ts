import { CartComponent } from '@angular-monorepo/cart'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CartPageComponent } from './cart-page.component'

describe('CartPageComponent', () => {
	let component: CartPageComponent
	let fixture: ComponentFixture<CartPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CartPageComponent, CartComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(CartPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render h2', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h2')?.textContent).toContain('Cart')
	})
})
