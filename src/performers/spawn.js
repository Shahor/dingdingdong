import { hrtime } from 'process'
import { spawn } from 'child_process'
import { compose } from 'ramda'
import Process from 'process'
import { rich as toRich }from '../utils/formatter'

const toTimeDiff = (start) => hrtime(start)
const toMs = (duration) => {
	return (duration[0] * 1e9 + duration[1]) / 1e6
}

const toDuration = compose(
	toMs,
	toTimeDiff
)

// TODO : Handle stdin!
let doIt = (command, args) => {
	const spawned = spawn(command, args)

	let stderr = ''
	let stdout = ''

	return new Promise((resolve, reject) => {
		const startTime = hrtime()
		spawned.stdout.on('data', (data) => {
			stdout += data
		})

		spawned.stderr.on('data', (data) => {
			stderr += data
		})

		spawned.on('error', (e) => {
			return reject(e)
		})

		spawned.on('close', (code) => {
			const toNl = (str) => str.replace(/\n/, '\n')

			stdout = toNl(stdout)
			stderr = toNl(stderr)
			const duration = toDuration(startTime)

			resolve({
				command : `${command} ${args.join(' ')}`,
				stdout,
				stderr,
				code,
				duration
			})
		})
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


export default (parsed) => {
	return doIt(parsed.command, parsed.arguments)
		.then(mergePayload)
		.then(display)
		.then(toRich)
		.catch((error) => {
			console.log(error)
			throw error
		})
}
