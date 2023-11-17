import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlockquoteComponent } from '@angular-monorepo/blockquote'
import { HeaderComponent } from '../../components/header/header.component'

@Component({
	selector: 'angular-monorepo-testimonials-page',
	standalone: true,
	imports: [CommonModule, BlockquoteComponent, HeaderComponent],
	templateUrl: './testimonials-page.component.html',
	styleUrls: ['./testimonials-page.component.scss'],
})
export class TestimonialsPageComponent {}
