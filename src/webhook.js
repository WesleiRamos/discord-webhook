const request = require('request');

class DiscordWebhook {
  /**
   * @param {String} url Webhook URL
   */
  constructor(url) {
    this.url = url;
  }

  /**
   * @param {MessageBuilder} message MessageBuilder object to be sent
   */
  send(message) {
    return new Promise((resolve, reject) => {
      request.post(this.url, { json: message.getMessage() }, (err, response, body) => {
        if (err)
          return reject(err);

        resolve(body);
      });
    });
  }
}

module.exports = DiscordWebhook;