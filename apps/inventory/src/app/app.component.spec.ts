import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ActivatedRoute, RouterLink } from '@angular/router'

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule.withRoutes([]), AppComponent, RouterLink],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							data: {},
							params: {},
							queryParams: {},
							fragment: {},
							outlet: {},
						},
					},
				},
			],
		}).compileComponents()
	})

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1')?.textContent).toContain(
			'GENESIS CANDLES'
		)
	})

	it(`should have as title 'GENESIS CANDLES'`, () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app.title).toEqual('GENESIS CANDLES')
	})

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1')?.textContent).toContain(
			'GENESIS CANDLES'
		)
	})
})
