class AuthorBuilder {
  /**
   * Class represent author embedded content
   */
  constructor() {
    this.author = {};
  }

  /**
   * Return author object
   */
  getAuthor() {
    return this.author;
  }

  /**
   * Set author name
   * @param {String} name
   */
  setName(name) {
    this.author.name = name;
  }

  /**
   * Set author url
   * @param {String} url
   */
  setURL(url) {
    this.author.url = url;
  }

  /**
   * Set icon of author
   * @param {String} url
   */
  setIconURL(url) {
    this.author.icon_url = url;
  }
}

module.exports = AuthorBuilder;