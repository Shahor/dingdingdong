const emotion = code === 0 ? '🙂' : '😥'
const title = "Time to finish your coffee o/"

export default ({command, stdout, stderr, duration, code }) => {
	return `${title}

Command: ${command}
Duration: ${duration}ms
Stdout: ${stdout}
Stderr: ${stderr}
Exit code: ${code} ${emotion}

Enjoy your day, champ.
You rock! 🤘
`
}