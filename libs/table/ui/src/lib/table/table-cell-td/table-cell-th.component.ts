import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-table-cell-th',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table-cell-th.component.html',
	styleUrls: ['./table-cell-th.component.scss'],
})
export class TableCellThComponent {
	@Input() title: string = ''
}
