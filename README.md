# dingdingdong

For your notification needs.
`dingdingdong` can automatically send you notifications once your long running program ends, so you can go grab a coffee in peace and be back at your computer just in time.

Notifications will be sent using the connectors you provide in your config file (`~/.dingdingdongrc`)

# Examples

```shell
$> dingdingdong done sleep 1800 # have a good 30mn nap
$> dingdingdong send "Hello devices?"
```

More infos with : 
```shell
$> dingdingdong -h
```

# Install

You need [nodejs](https://nodejs.org/en/)

## With yarn:

> `$> yarn global add dingdingdong`

## With npm:
> `$> npm install -g dingdingdong`

## Configure your connectors

Follow the form here. If you don't need a given connector, don't mention it in the config.

```json
{
	"connectors" : {
		"pushbullet" : {
			"use" : true,
			"access_token" : "_YOUR_KEY_HERE_"
		},
		"simplepush" : {
			"use" : false,
			"key" : "_YOUR_KEY_"
		},
		"osx" : {
			"use" : true
		}
	}
}

```

# Usage

`$> dingdingdong my-long-command -with args`

It will automatically notify you using the connectors your configured with extra info.

# Supported connectors

- Pushbullet (for mobile notification)
- Simplepush
- osx notification center
