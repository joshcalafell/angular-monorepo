import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TableSortComponent } from './table-sort.component'

xdescribe('TableSortComponent', () => {
	let component: TableSortComponent
	let fixture: ComponentFixture<TableSortComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TableSortComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(TableSortComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
