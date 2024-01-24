import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'fromCamel',
	standalone: true,
})
export class FromCamelPipe implements PipeTransform {
	transform(value: string): string {
		const rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g
		return value.replace(rex, '$1$4 $2$3$5')
	}
}
