# dingdingdong
Alert yourself when a task ends

# What for?

Whatever you need it to :)

# Install

## With yarn:

> `$> yarn global add dingdingdong`

## With npm:
> `$> npm install -g dingdingdong`

## Generate the config

`$> dingdingdong -g`

This command will create a `.dingdingdongrc` file in your `~/`
(The command will ask you to when you execute it the first time anyway)

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
