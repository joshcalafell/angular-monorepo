import { ComponentFixture, TestBed } from '@angular/core/testing'
import { WishlistPageComponent } from './wishlist-page.component'
import { ButtonComponent } from '@angular-monorepo/button'
import { WishlistComponent } from '@angular-monorepo/wishlist'
describe('WishlistPageComponent', () => {
	let component: WishlistPageComponent
	let fixture: ComponentFixture<WishlistPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WishlistPageComponent, ButtonComponent, WishlistComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(WishlistPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
