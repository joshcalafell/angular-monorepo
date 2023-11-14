import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-order-detail',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent {
	title = '- Order Detail'
}
