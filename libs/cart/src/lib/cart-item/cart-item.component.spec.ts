import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CartItemComponent } from './cart-item.component'
import { BrowserModule } from '@angular/platform-browser'

describe('CartItemComponent', () => {
	let component: CartItemComponent
	let fixture: ComponentFixture<CartItemComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CartItemComponent, BrowserModule],
		}).compileComponents()

		fixture = TestBed.createComponent(CartItemComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
