import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component'

@Component({
	selector: 'angular-monorepo-product-detail',
	standalone: true,
	imports: [CommonModule, HeaderComponent],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
	title = '- Product Detail'
	mockDate: string = new Date().toISOString()
}
