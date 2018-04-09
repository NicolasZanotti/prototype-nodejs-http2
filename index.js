require('marko/node-require').install();

const fs = require('fs');
const http = require('http2');
const Koa = require('koa');
const template = require('./template.marko');

const app = new Koa();
const httpsOptions = {
	cert: fs.readFileSync('./server.crt'),
	key: fs.readFileSync('./server.key')
};

app.use(ctx => {
	let timeOutPromise = new Promise(
		resolve => setTimeout(() => resolve('Here is text from the promise.'), 5000)
	);

	ctx.type = 'html';
	ctx.body = template.stream({
		timeOutPromise
	});
});

http.createSecureServer(httpsOptions, app.callback())
	.listen(3000, () => console.log('https://localhost:3000'));
