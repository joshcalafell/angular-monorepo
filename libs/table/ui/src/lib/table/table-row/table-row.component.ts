import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-table-row',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table-row.component.html',
	styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent<T> {
	@Input() data: T[] = []
}
