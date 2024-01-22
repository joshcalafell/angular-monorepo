import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'angular-monorepo-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnDestroy {
	@Input() buttonText?: string = 'Button'
	@Input() buttonType?: string = 'button'
	@Input() buttonClass?: string = 'btn btn-primary'
	@Input() buttonDisabled?: boolean = false
	@Input() buttonId?: string = ''

	constructor() {}

	ngOnInit(): void {
		this.buttonText = this.buttonText || 'Button'
		this.buttonType = this.buttonType || 'button'
		this.buttonClass = this.buttonClass || 'primary'
		this.buttonDisabled = this.buttonDisabled || false
		this.buttonId = this.buttonId || ''
	}

	ngOnDestroy(): void {
		this.buttonText = ''
		this.buttonType = ''
		this.buttonClass = ''
		this.buttonDisabled = false
		this.buttonId = ''
	}
}
