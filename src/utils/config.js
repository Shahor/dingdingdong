// TODO : Test for .dingdingdongrc presence
import { homedir } from 'os'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { compose } from 'ramda'
import { exit } from 'process'

const configFile = '.dingdingdongrc'

/* Ramda has no practical purpose here other than
me trying to look cool using what the cool kids do.

=> (•_•) 
=> ( •_•)>⌐■-■ 
=> (⌐■_■) deal with it
*/
const getPath = () => resolve(homedir(), configFile)
const read = (path) => readFileSync(path, 'utf8')
const load = compose(
	JSON.parse,
	read,
	getPath
)

let Config
try {
	Config = load()
} catch (e) {
	if (e.code === 'ENOENT') {
		console.log(`⚠️ ️ I can't find the much needed ${getPath()} file.`)
		console.log(`Please consider creating it and filling it with the proper values.`)
		console.log(`Cheers 👋`)
	} else {
		console.debug(e)
	}

	exit(1)
}

const _default = {
	"connectors" : {
		"pushbullet" : {}
	}
}

export default Object.assign({}, _default, Config)
