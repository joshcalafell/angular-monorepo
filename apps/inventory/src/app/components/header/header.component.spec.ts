import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('HeaderComponent', () => {
	let component: HeaderComponent
	let fixture: ComponentFixture<HeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderComponent, RouterTestingModule.withRoutes([])],
		}).compileComponents()

		fixture = TestBed.createComponent(HeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render title', () => {
		const fixture = TestBed.createComponent(HeaderComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1 a')?.textContent).toContain(
			'GENESIS CANDLES'
		)
	})

	it('should render title', () => {
		const fixture = TestBed.createComponent(HeaderComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1 a')?.textContent).toContain(
			'GENESIS CANDLES'
		)
	})
})
