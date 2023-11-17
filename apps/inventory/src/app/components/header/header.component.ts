import { Component, Input, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterLink } from '@angular/router'

@Component({
	selector: 'angular-monorepo-header',
	standalone: true,
	imports: [CommonModule, RouterLink, HeaderComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	router = inject(Router)
	@Input() title: string = ''
	@Input() link?: string = ''
}
