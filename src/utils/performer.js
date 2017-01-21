import Process from 'process'
import Config from './config'

import spawn from './spawn'
import Connectors from '../connectors'

import rich, { text as formatText } from './formatter'

const touchIt = (payload, format) => {
	const formatted = format(payload)

	Object.keys(Config.connectors).forEach((connectorName) => {
		const config = Config.connectors[connectorName]

		connectorName = connectorName
			.replace(/^\w/, (n) => n.toUpperCase())

		Connectors[connectorName].send(config, formatted)
	})
}

const base = {
	command : '',
	stdout : '',
	stderr : '',
	code : '',
	duration : null
}

const mergePayload = (payload) => {

	return Object.assign(
		{}, 
		base,
		payload
	)
}

const display = (payload) => {
	if (payload.stdout) {
		Process.stdout.write(payload.stdout)
	}

	if (payload.stderr) {
		Process.stderr.write(payload.stderr)
	}

	return payload
}

export let exec = (parsed) => {
	spawn(parsed.command, parsed.arguments)
		.then(mergePayload)
		.then(display)
		.then((payload) => touchIt(payload, rich))
		.catch((error) => {
			console.log(error)
			throw error
		})
}

export let text = (payload) => touchIt(payload, formatText)

