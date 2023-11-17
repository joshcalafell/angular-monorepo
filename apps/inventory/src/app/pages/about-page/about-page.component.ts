import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlockquoteComponent } from '@angular-monorepo/blockquote'
import { ButtonComponent } from '@angular-monorepo/button'
import { HeaderComponent } from '../../components/header/header.component'

@Component({
	selector: 'angular-monorepo-about-page',
	standalone: true,
	imports: [
		CommonModule,
		BlockquoteComponent,
		ButtonComponent,
		HeaderComponent,
	],
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {}
