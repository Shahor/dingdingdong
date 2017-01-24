const notify = require('osx-notifier')

export const send = (_, payload) => {
	notify({
		type : 'info',
		title : '🔔 Ding ding dong!',
		message : payload
	})
}
