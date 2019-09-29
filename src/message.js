class MessageBuilder {
  /**
   * Class represent message to be sent to webhook
   */
  constructor() {
    this.message = {};
  }

  /**
   * Return object to be sent to webhook
   */
  getMessage() {
    if (this.message.embeds) {
      for (let i = 0; i < this.message.embeds.length; i++)
        this.message.embeds[i] = this.message.embeds[i].getEmbed();
    }

    return this.message;
  }

  /**
   * Set webhook username
   * @param {String} username
   */
  setUsername(username) {
    this.message.username = username;
  }

  /**
   * Set webhook avatar
   * @param {String} avatar
   */
  setAvatar(avatar) {
    this.message.avatar_url = avatar;
  }

  /**
   * Set webhook content
   * @param {String} content
   */
  setContent(content) {
    this.message.content = content;
  }

  /**
   * Set if is a text-to-speech message
   * @param {Boolean} [tts=true]
   */
  setTTS(tts = true) {
    this.message.tts = tts;
  }

  /**
   * Add a embedded content
   * @param {EmbedBuilder} embed
   */
  addEmbed(embed) {
    if (!this.message.embeds)
      this.message.embeds = [];

    this.message.embeds.push(embed);
  }
}

module.exports = MessageBuilder;