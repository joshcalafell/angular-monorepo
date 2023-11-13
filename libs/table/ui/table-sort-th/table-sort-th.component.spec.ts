import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TableSortThComponent } from './table-sort-th.component'

describe('TableSortThComponent', () => {
	let component: TableSortThComponent
	let fixture: ComponentFixture<TableSortThComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TableSortThComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(TableSortThComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
