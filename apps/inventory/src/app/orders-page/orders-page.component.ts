import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-orders-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './orders-page.component.html',
	styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent {}
