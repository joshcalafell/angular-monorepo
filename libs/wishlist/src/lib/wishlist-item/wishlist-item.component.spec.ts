import { ComponentFixture, TestBed } from '@angular/core/testing'
import { WishlistItemComponent } from './wishlist-item.component'
import { ButtonComponent } from '@angular-monorepo/button'

describe('WishlistItemComponent', () => {
	let component: WishlistItemComponent
	let fixture: ComponentFixture<WishlistItemComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WishlistItemComponent, ButtonComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(WishlistItemComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
