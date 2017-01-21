#!/usr/bin/env node

import { exec, text } from './utils/performer'
import { setupHandlers } from './utils/args-parser'

setupHandlers({
	onDone : exec,
	onSend : text
})
