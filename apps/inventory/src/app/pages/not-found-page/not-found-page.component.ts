import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'angular-monorepo-not-found-page',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './not-found-page.component.html',
	styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {}
