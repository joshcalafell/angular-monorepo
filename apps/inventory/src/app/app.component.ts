import { Component } from '@angular/core'

import { UpperCasePipe } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
	standalone: true,
	imports: [UpperCasePipe, RouterLink, RouterLinkActive, RouterOutlet],
	selector: 'angular-monorepo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'GENESIS CANDLES'
}
