import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TableCellThComponent } from './table-cell-th.component'

describe('TableCellThComponent', () => {
	let component: TableCellThComponent
	let fixture: ComponentFixture<TableCellThComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TableCellThComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(TableCellThComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
