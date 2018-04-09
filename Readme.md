Prototype using HTTP2 with Koa and Marko.

## Certificates

To install the certificates locally, follow the steps from this [blog post](https://alexanderzeitler.com/articles/Fixing-Chrome-missing_subjectAltName-selfsigned-cert-openssl/). Then pass the gernated files `server.crt` and `server.key` to the HTTPS server like this:

	const httpsOptions = {
		cert: fs.readFileSync('./server.crt'),
		key: fs.readFileSync('./server.key')
	};
	const server = https.createServer(httpsOptions, ...)

In macOS:

* Start the server and load it in Chrome;
* Open Developer Tools ➜ Security ➜ View Certificate;
* Drag the certificate image out of the window and open it with KeyChain Access;
* Expand "Trust" and change "Secure Socket Layer (SSL)" to "Always trust";
* Restart the server and refresh in Chrome.
