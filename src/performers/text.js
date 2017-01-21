import { text as toText } from '../utils/formatter'

export default (text) => {
	return Promise.resolve(text)
		.then(toText)
}
