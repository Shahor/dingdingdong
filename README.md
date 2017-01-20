# dingdingdong
Alert yourself when a task ends

# What for?

Whatever you need it to :)

# Install

## With yarn:

> `$> yarn global add dingdingdong`

## With npm:
> `$> npm install -g dingdingdong`

## Configure your connectors

```json
{
	"connectors" : {
		"pushbullet" : {
			// You can get this at https://www.pushbullet.com/#settings
			"access_token" : "_YOUR_KEY_HERE_"
		},
		...
	}
}
```

# Usage

`$> dingdingdong my-long-command -with args`

It will automatically notify you using the connectors your configured with extra info.

# Supported connectors

- Pushbullet (for mobile notification)
