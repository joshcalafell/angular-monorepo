import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonComponent } from './button.component'

describe('ButtonComponent', () => {
	let component: ButtonComponent
	let fixture: ComponentFixture<ButtonComponent>

	const mockButon = {
		buttonClass: 'btn btn-primary',
		buttonText: 'Button',
		buttonType: 'button',
		buttonDisabled: false,
		buttonId: '1',
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ButtonComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ButtonComponent)
		component = fixture.componentInstance
		component.buttonClass = mockButon.buttonClass
		component.buttonText = mockButon.buttonText
		component.buttonType = mockButon.buttonType
		component.buttonDisabled = mockButon.buttonDisabled
		component.buttonId = mockButon.buttonId

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render button', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')).toBeTruthy()
	})

	it('should render button with text', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')?.textContent).toContain('Button')
	})

	it('should render button with class', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')?.className).toContain(
			'btn btn-primary'
		)
	})

	it('should render button with type', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')?.type).toContain('button')
	})

	it('should render button with id', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')?.id).toContain('1')
	})

	it('should render button with disabled', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('button')?.disabled).toBeFalsy()
	})
})
