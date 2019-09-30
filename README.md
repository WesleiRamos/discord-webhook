# Discord Webhook

Example:

![](https://i.imgur.com/TFxXO4g.png)

```js
const DiscordWebhook = require('discord-webhook');
const Webhook = new DiscordWebhook.Webhook('URL');

const msg = new DiscordWebhook.MessageBuilder();
msg.setUsername('Weslei Ramos');
msg.setAvatar('https://i.imgur.com/nY5h2n3.png');
msg.setContent('Hello World');

Webhook.send(msg);
```