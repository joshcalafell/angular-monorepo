import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AppLink } from '../../app.link.model'
import { LINKS } from '../../header.nav.links'
import { ButtonComponent } from '@angular-monorepo/button'

@Component({
	selector: 'angular-monorepo-header',
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		RouterLinkActive,
		HeaderComponent,
		ButtonComponent,
	],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@Input() title: string = '' as string
	@Input() links: AppLink[] = LINKS as AppLink[]
	@Input() loggedIn: boolean = false as boolean

	@Output() loginClicked = new EventEmitter<boolean>() as EventEmitter<boolean>

	loginHandler(): void {
		console.log('loginHandler')
		this.loginClicked.emit(!this.loggedIn)
	}
}
