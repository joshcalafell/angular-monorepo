import { FromCamelPipe } from '../../pipes/from-camel/from-camel.pipe'

describe('FromCamelPipe', () => {
	it('create an instance', () => {
		const pipe = new FromCamelPipe()
		expect(pipe).toBeTruthy()
	})

	it('should convert camel case to sentence case', () => {
		const pipe = new FromCamelPipe()
		expect(pipe.transform('CamelCase')).toBe('Camel Case')
	})
})
