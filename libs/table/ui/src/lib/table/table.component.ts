import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-table',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	rows = [
		{ id: 1, name: 'Justin', age: 30, job: 'Software Engineer' },
		{ id: 2, name: 'John', age: 33, job: 'Software Engineer' },
		{ id: 3, name: 'Jane', age: 31, job: 'Software Engineer' },
		{ id: 4, name: 'Jack', age: 29, job: 'Software Engineer' },
		{ id: 5, name: 'Joan', age: 32, job: 'Software Engineer' },
		{ id: 6, name: 'Joe', age: 28, job: 'Software Engineer' },
		{ id: 7, name: 'Jen', age: 34, job: 'Software Engineer' },
		{ id: 8, name: 'Jude', age: 27, job: 'Software Engineer' },
		{ id: 9, name: 'Jade', age: 35, job: 'Software Engineer' },
		{ id: 10, name: 'Jill', age: 32, job: 'Software Engineer' },
	]
	columns = [{ prop: 'name' }, { name: 'Age' }, { name: 'Job Title' }]
}
