import { Component } from '@angular/core'

import { UpperCasePipe } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { NavComponent } from './components/nav/nav.component'

@Component({
	standalone: true,
	imports: [
		UpperCasePipe,
		RouterLink,
		RouterLinkActive,
		RouterOutlet,
		NavComponent,
	],
	selector: 'angular-monorepo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'GENESIS CANDLES'
}
