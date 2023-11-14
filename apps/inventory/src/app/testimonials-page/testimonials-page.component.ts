import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlockquoteComponent } from '@angular-monorepo/blockquote'

@Component({
	selector: 'angular-monorepo-testimonials-page',
	standalone: true,
	imports: [CommonModule, BlockquoteComponent],
	templateUrl: './testimonials-page.component.html',
	styleUrls: ['./testimonials-page.component.scss'],
})
export class TestimonialsPageComponent {}
