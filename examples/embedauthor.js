const DiscordWebhook = require('discord-webhook');
const Webhook = new DiscordWebhook.Webhook('URL');

const msg = new DiscordWebhook.MessageBuilder();
msg.setUsername('Weslei Ramos');
msg.setAvatar('https://i.imgur.com/nY5h2n3.png');

const embed = new DiscordWebhook.EmbedBuilder();
embed.setTitle('Embed Example');
embed.setDescription('1º');
embed.addTimestamp();

const author = new DiscordWebhook.AuthorBuilder();
author.setName('Keanu Reeves');
author.setIconURL('https://i.imgur.com/kF0P0W0.jpg');

embed.setAuthor(author);
msg.addEmbed(embed);

Webhook.send(msg);