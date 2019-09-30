const DiscordWebhook = require('discord-webhook');
const Webhook = new DiscordWebhook.Webhook('URL');

const msg = new DiscordWebhook.MessageBuilder();
msg.setUsername('Weslei Ramos');
msg.setAvatar('https://i.imgur.com/nY5h2n3.png');

const embed = new DiscordWebhook.EmbedBuilder();
embed.setTitle('Embed Example');
embed.setDescription('Embedded content example');
embed.addField('Field 1', 'Value 1');
embed.addField('Field 2', 'Value 2', true);
embed.addField('Field 3', 'Value 3', true);
embed.addField('Field 4', 'Value 4');
embed.addTimestamp();
embed.setFooter('Fooooooooter');

msg.addEmbed(embed);
Webhook.send(msg);