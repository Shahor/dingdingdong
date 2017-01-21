import request from 'request'

const ENDPOINT = "https://api.pushbullet.com/v2/pushes"
const doRequest = ({ access_token }, payload) => {
	let data = ''

	return new Promise((resolve, reject) => {
		request.defaults({
			headers : {
				'Access-Token' : access_token
			}
		}).post(ENDPOINT)
			.form({
				type : 'note',
				title : '🔔 Ding ding dong!',
				body : payload
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
