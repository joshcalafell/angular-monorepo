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

		component.title = 'GENESIS CANDLES'
		component.links = [
			{ path: '/inventory', name: 'Inventory' },
			{ path: '/orders', name: 'Orders' },
			{ path: '/cart', name: 'Cart' },
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render title', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1 a')?.textContent).toContain(
			'GENESIS CANDLES'
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

	it('should render 3 li', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('nav ul li').length).toBe(3)
	})

	it('should contain svg', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('svg')).toBeTruthy()
	})

	it('should render 3 links', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelectorAll('nav ul li a').length).toBe(3)
	})

	it('should contain button', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')).toBeTruthy()
	})
})
