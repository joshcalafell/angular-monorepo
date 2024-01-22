import { Component } from '@angular/core'

import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { AppLink } from './app.link.model'
import { FooterComponent } from './common/footer/footer.component'
import { HeaderComponent } from './common/header/header.component'
import { LINKS } from './header.nav.links'

@Component({
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		RouterLinkActive,
		RouterOutlet,
		FooterComponent,
		HeaderComponent,
	],
	selector: 'angular-monorepo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Genesis Candles'

	loggedIn = false

	links: AppLink[] = LINKS

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	trackByFn(index: number, item: unknown): number {
		// console.log('trackByFn', index, item)
		return index
	}

	loginHandler(): void {
		console.log('loginHandler')
		this.loggedIn = !this.loggedIn
	}
}
