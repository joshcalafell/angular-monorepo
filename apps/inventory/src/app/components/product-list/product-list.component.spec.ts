import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductListComponent } from './product-list.component'

describe('ProductListComponent', () => {
	let component: ProductListComponent
	let fixture: ComponentFixture<ProductListComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductListComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it(`should have as title 'Products'`, () => {
		expect(component.title).toEqual('- Products')
	})

	it('should render title', () => {
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1')?.textContent).toContain('- Products')
	})
})
