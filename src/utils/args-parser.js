import Commander from 'commander'
import Package from '../../package'
import { compose } from 'ramda'

/**
 * @description Parses the command line for when Commander can't
 * @param {Array} args the command line split by spaces
 * @return {Object} { command : String, arguments : Array }
 */
const parseArgs = (...args) => {
	const command = args[0]
	// the last arg will always be the one containing all the args
	// For some reason "ls -la op -hep" is parsed as two 
	// commands by Commander. 
	// ¯\_(ツ)_/¯
	const instance = args.slice(-1).pop()

	// Took me so long to find how to do this T_T
	// There is probably a better way of doing so
	// If you know how to, please 🙏 help a brother out
	let _arguments = instance.parent.rawArgs.slice(4)
	return { command, arguments : _arguments }
}

/**
 * @description set Commander up for prime time
 */
const setupCommander = () => {
	Commander
		.command('done <cmd>')
		.allowUnknownOption()
		.description('Send notification <cmd> has finished running')
		.action((...args) => {
			Commander.emit('onDone', ...args)
		})

	Commander
		.command('send <txt>')
		.description('Send given <txt> as notification')
		.action((...args) => {
			Commander.emit('onSend', ...args)
		})

	Commander
		.version(Package.version)
		.option('-d, --debug')
		.option('-t, --test', 'Send a test notification [using "sleep 1" command]', () => {
			Commander.emit('onTest', {
				command : 'sleep',
				arguments : [1]
			})
		})
		.parse(process.argv)
}

let alreadySetup = false

/**
 * @description Set up the action handlers for CommanderA
 * @param {Object} handlers {onDone : function, onSend: function}
 * @return {void}
 */
export function setupHandlers({
	onDone,
	onSend
}) {
	if (!alreadySetup) {
		Commander.addListener('onDone', compose(onDone, parseArgs))
		Commander.addListener('onSend', onSend)
		Commander.addListener('onTest', onDone)

		setupCommander()
		alreadySetup = true
	}
}
