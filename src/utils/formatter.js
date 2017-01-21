export let rich = ({command, stdout, stderr, duration, code }) => {
	const emotion = code === 0 ? '🙂' : '😥'
	const title = "Time to finish your coffee o/"

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

export let text = (text) => {
	return text
}
