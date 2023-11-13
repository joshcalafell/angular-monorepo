import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TableRowComponent } from './table-row.component'

class TestObject {}
// See: (for testing generics} => https://stackoverflow.com/questions/58410148/how-to-unit-test-a-generic-component-in-angular
describe('TableRowComponent', () => {
	let component: TableRowComponent<TestObject>
	let fixture: ComponentFixture<TableRowComponent<TestObject>>

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TableRowComponent],
		}).compileComponents()

		fixture =
			TestBed.createComponent<TableRowComponent<TestObject>>(TableRowComponent)
		component = fixture.componentInstance as TableRowComponent<TestObject> // TODO: WTH is this? Copilot generated:https://stackoverflow.com/a/65566782/9861600
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
