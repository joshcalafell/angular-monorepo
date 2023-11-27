/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CartComponent } from './cart.component'

describe('CartComponent', () => {
	let component: CartComponent<any>
	let fixture: ComponentFixture<CartComponent<any>>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CartComponent],
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
