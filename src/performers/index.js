import Config from '../utils/config'
import Connectors from '../connectors'

import performSpawn from './spawn'
import performText from './text'

const touchIt = (payload) => {
	Object.keys(Config.connectors).forEach((connectorName) => {
		const config = Config.connectors[connectorName]

		if (!config.use) {
			return
		}

		connectorName = connectorName
			.replace(/^\w/, (n) => n.toUpperCase())

		Connectors[connectorName].send(config, payload)
	})
}

export function doSpawn(parsed) {
	return performSpawn(parsed)
		.then(touchIt)
}

export function doText(text) {
	return performText(text)
		.then(touchIt)
}
