const DiscordWebhook = require('discord-webhook');
const Webhook = new DiscordWebhook.Webhook('URL');

const msg = new DiscordWebhook.MessageBuilder();
msg.setUsername('Weslei Ramos');
msg.setAvatar('https://i.imgur.com/nY5h2n3.png');

const embed1 = new DiscordWebhook.EmbedBuilder();
embed1.setTitle('Embed Example');
embed1.setDescription('1º');
embed1.addTimestamp();

const embed2 = new DiscordWebhook.EmbedBuilder();
embed2.setTitle('Embed Example');
embed2.setDescription('2º');
embed2.addTimestamp();

msg.addEmbed(embed1);
msg.addEmbed(embed2);

Webhook.send(msg);