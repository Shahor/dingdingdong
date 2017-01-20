#!/usr/bin/env node

import Process from 'process'
import Config from './utils/config'
import spawn from './utils/spawn'

import Connectors from './connectors'


const touchIt = (payload) => {
	Object.keys(Config.connectors).forEach((connectorName) => {
		const config = Config.connectors[connectorName]

		connectorName = connectorName
			.replace(/^\w/, (n) => n.toUpperCase())

		Connectors[connectorName].send(config, payload)
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

spawn(Process.argv.slice(2))
	.then(mergePayload)
	.then(display)
	.then(touchIt)
	.catch((error) => {
		console.log(error)
		throw error
	})
