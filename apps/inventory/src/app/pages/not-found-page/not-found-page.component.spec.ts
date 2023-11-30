import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NotFoundPageComponent } from './not-found-page.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ActivatedRoute } from '@angular/router'
describe('NotFoundPageComponent', () => {
	let component: NotFoundPageComponent
	let fixture: ComponentFixture<NotFoundPageComponent>

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
			imports: [NotFoundPageComponent, RouterTestingModule.withRoutes([])],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents()

		fixture = TestBed.createComponent(NotFoundPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render h2', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h2')?.textContent).toContain(
			'Page Not Found'
		)
	})
})
