import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlockquoteComponent } from '@angular-monorepo/blockquote'

@Component({
	selector: 'angular-monorepo-about-page',
	standalone: true,
	imports: [CommonModule, BlockquoteComponent],
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {}
