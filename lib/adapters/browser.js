/* eslint-disable no-trailing-spaces */
const Response = require('../Response');

/**
 * Creates a new http request using `window.fetch` or `XMLHttpRequest`
 * @param {import('../Request')} request The centra request
 * @returns {Promise<import('../Response')>} A promise of the response from window.fetch or XMLHttpRequest
 * @warn `window.fetch` is only supported in the following browsers (keep an eye on versions):
 * 
 * __**window.fetch**__
 * - Chrome 42
 * - MS Edge 14
 * - Firefox 39
 * - Opera 29
 * - Safari 10.1
 *
 * __**Support for Blobs (files)**__
 * - Chrome 48
 * - Edge 79
 *
 * __**referrerPolicy property**__
 * - Chrome 52
 * - Edge 79
 * - Firefox 52
 * - Opera 39
 * - Safari 11.1
 *
 *  __**Abort Signals**__
 * - Chrome 66
 * - Edge 16
 * - Firefox 57
 * - Opera 53
 * - Safari 11.1
 *
 * __**Streaming response bodies**__
 * - Chrome 43
 * - Edge 14
 * - Firefox ??
 * - Opera 29
 * - Safari 10.1
 */
module.exports = async (request) => new Promise((resolve, reject) => {
	const xhr = new XMLHttpRequest();
	xhr.open(request.method, request.url);
	xhr.timeout = request.timeout;

	xhr.onreadystatechange = function onStateChange() { // eslint-disable-line
		if (this.readyState !== 4) return reject(new Error(this.statusText));
	};
});
