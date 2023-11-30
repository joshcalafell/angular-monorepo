import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FooterComponent } from './footer.component'

describe('FooterComponent', () => {
	let component: FooterComponent
	let fixture: ComponentFixture<FooterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FooterComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(FooterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render link to personal site', () => {
		const fixture = TestBed.createComponent(FooterComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('a')?.href).toContain(
			'https://www.joshuamichael.me'
		)
	})

	it('should render my name as the link text site', () => {
		const fixture = TestBed.createComponent(FooterComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('a')?.textContent).toContain(
			'Joshua Calafell'
		)
	})
})
