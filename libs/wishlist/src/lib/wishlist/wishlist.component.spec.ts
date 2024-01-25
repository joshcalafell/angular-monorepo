import { ComponentFixture, TestBed } from '@angular/core/testing'
import { WishlistComponent } from './wishlist.component'
import { ButtonComponent } from '@angular-monorepo/button'

describe('WishlistComponent', () => {
	let component: WishlistComponent
	let fixture: ComponentFixture<WishlistComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WishlistComponent, ButtonComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(WishlistComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
