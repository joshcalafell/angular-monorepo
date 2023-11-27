import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { NavComponent } from './nav.component'
describe('NavComponent', () => {
	let component: NavComponent
	let fixture: ComponentFixture<NavComponent>

	const fakeActivatedRoute = {
		snapshot: {
			data: {},
			params: {},
			queryParams: {},
			fragment: {},
			outlet: {},
		},
	} as ActivatedRoute

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{ path: 'testimonials', component: NavComponent },
					{ path: 'inventory', component: NavComponent },
					{ path: 'orders', component: NavComponent },
				]),
				NavComponent,
				RouterLink,
			],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(NavComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
