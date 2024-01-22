import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderComponent } from './header.component'
import { LINKS } from '../../header.nav.links'
import { ButtonComponent } from '@angular-monorepo/button'

xdescribe('HeaderComponent', () => {
	let component: HeaderComponent
	let fixture: ComponentFixture<HeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HeaderComponent,
				RouterTestingModule.withRoutes([]),
				ButtonComponent,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(HeaderComponent)
		component = fixture.componentInstance

		component.title = 'Candle Company'
		component.links = LINKS

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render logo image', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('img')).toBeTruthy()
	})

	xit('should render title', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1 a')?.textContent).toContain(
			'Candle Company'
		)
	})

	it('should render 1 nav', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('nav').length).toBe(1)
	})

	it('should render 1 ul', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('nav ul').length).toBe(1)
	})

	it('should render 5 li', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('nav ul li').length).toBe(5)
	})

	it('should contain svg', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('svg')).toBeTruthy()
	})

	it('should render 3 links', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('nav ul li a').length).toBe(5)
	})

	it('should contain button', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')).toBeTruthy()
	})

	it('should contain button qith text "Login / Sign Up"', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')?.textContent).toContain(
			'Login / Sign Up'
		)
	})
})
