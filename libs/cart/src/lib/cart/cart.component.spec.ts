/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CartComponent } from './cart.component'
import { CartItemComponent } from '../cart-item/cart-item.component'

describe('CartComponent', () => {
	let component: CartComponent
	let fixture: ComponentFixture<CartComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CartComponent, CartItemComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(CartComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
