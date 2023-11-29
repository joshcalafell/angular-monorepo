import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AppLink } from '../../app.link.model'
import { LINKS } from '../../header.nav.links'

@Component({
	selector: 'angular-monorepo-header',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, HeaderComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@Input() title: string = '' as string
	@Input() links: AppLink[] = LINKS as AppLink[]
}
