import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-product-detail',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
	title = '- Product Detail'
}
