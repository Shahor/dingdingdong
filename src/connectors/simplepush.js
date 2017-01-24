import request from 'request'

const ENDPOINT = "https://api.simplepush.io/send"

const doRequest = ({ key }, payload) => {
	let data = ''

	return new Promise((resolve, reject) => {
		request.post(ENDPOINT)
			.form({
				title : '🔔 Ding ding dong!',
				msg : payload,
				key
			})
			.on('data', (chunk) => {
				data += chunk
			})
			.on('error', reject)
			.on('end', () => {
				resolve(data)
			})
	})
}

export const send = doRequest
