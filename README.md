# dingdingdong

For your notification needs.
`dingdingdong` can automatically send you notifications once your long running program ends, so you can go grab a coffee in peace and be back at your computer just in time.

# Install

You need [nodejs](https://nodejs.org/en/)

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
