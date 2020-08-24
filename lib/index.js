const Request = require('./Request');

/**
 * Creates a request
 * @param {string | import('./Request').RequestOptions} url The URL instance
 * @param {import('./Request').Methods | import('./Request').RequestOptions} method The method or options to use
 */
module.exports = (url, method) => new Request(url, method);
