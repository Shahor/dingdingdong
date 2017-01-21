#!/usr/bin/env node

import { doSpawn, doText } from './performers'
import { setupHandlers } from './utils/args-parser'

setupHandlers({
	onDone : doSpawn,
	onSend : doText
})
