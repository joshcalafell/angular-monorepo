import { Component } from '@angular/core'

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { NavComponent } from './components/nav/nav.component'

@Component({
	standalone: true,
	imports: [
		RouterLink,
		RouterLinkActive,
		RouterOutlet,
		NavComponent,
		FooterComponent,
	],
	selector: 'angular-monorepo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'GENESIS CANDLES'
}
