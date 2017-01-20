export default ({command, stdout, stderr, duration, code }) => {
	const emotion = code === 0 ? '🙂' : '😥'
	return `Result time : ${emotion} 

Command: ${command}
Duration: ${duration}ms
stdout: ${stdout}
stderr: ${stderr}
exit code: ${code}

Enjoy your day, your rock! 🤘
`
}