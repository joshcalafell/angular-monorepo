import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TestimonialsPageComponent } from './testimonials-page.component'

describe('TestimonialsPageComponent', () => {
	let component: TestimonialsPageComponent
	let fixture: ComponentFixture<TestimonialsPageComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TestimonialsPageComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(TestimonialsPageComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render h2', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h2')?.textContent).toContain('Testimonials')
	})
})
