class EmbedBuilder {
  /**
   * Class represent a embedded content
   */
  constructor() {
    this.embed = {};
  }

  /**
   * Returns embedded content object
   */
  getEmbed() {
    if (this.embed.author)
      this.embed.author = this.embed.author.getAuthor();

    return this.embed;
  }

  /**
   * Set author information
   * @param {AuthorBuilder} author
   */
  setAuthor(author) {
    this.embed.author = author;
  }

  /**
   * Set embed color
   * @para {Number|String} color
   */
  setColor(color) {
    if (typeof color === 'string') {
      if (color[0] == '#')
        color = color.slice(1);

      color = parseInt(color, 16);
    }

    this.embed.color = color;
  }

  /**
   * Set embed title
   * @param {String} title
   */
  setTitle(title) {
    this.embed.title = title;
  }

  /**
   * Set embed url
   * @param {String} url
   */
  setURL(url) {
    this.embed.url = url;
  }

  /**
   * Set embed description
   * @param {String} description
   */
  setDescription(description) {
    this.embed.description = description;
  }

  /**
   * Set embed footer
   * @param {String} text
   * @param {String} icon Footer icon
   */
  setFooter(text, icon) {
    let footer = { text };
    if (icon)
      footer.icon_url = icon;

    this.embed.footer = footer;
  }

  /**
   * Add a new field
   * @param {String} name Field name
   * @param {String} value Field value
   * @param {Boolean} inline The field is inline?
   */
  addField(name, value, inline) {
    if (!this.embed.fields)
      this.embed.fields = [];

    this.embed.fields.push({ name, value, inline });
  }

  /**
   * Add embedded content timestamp
   * @param {Date} timestamp
   */
  addTimestamp(timestamp) {
    if (!timestamp)
      timestamp = (new Date()).toISOString();

    this.embed.timestamp = timestamp;
  }

  /**
   * Add a image
   * @param {String} url Image url
   * @param {Number} width Image width
   * @param {Number} height Image height
   */
  addImage(url, width, height) {
    let image = { url };
    
    if (width) image.width = width;
    if (height) image.height = height;

    this.embed.image = image;
  }

  /**
   * Add a thumbnail
   * @param {String} url Thumbnail url
   * @param {Number} width Thumbnail width
   * @param {Number} height Thumbnail height
   */
  addThumbnail(url, width, height) {
    let thumbnail = { url };
    
    if (width) thumbnail.width = width;
    if (height) thumbnail.height = height;

    this.embed.thumbnail = thumbnail;
  }
}

module.exports = EmbedBuilder;