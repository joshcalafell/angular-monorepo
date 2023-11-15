import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-table-sort-th',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table-sort-th.component.html',
	styleUrls: ['./table-sort-th.component.scss'],
})
export class TableSortThComponent {
	@Input() title: string = ''
	@Input() isCurrSort: boolean = false
	@Input() sortedAsc: boolean = false

	@Input() sortFunction: () => Promise<void> = async () => {}

	sortFn(): void {
		this.sortFunction().then(() => {
			console.log('sortFn()')
		})
	}
}
