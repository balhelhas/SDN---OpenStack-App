import restify = require('restify');

const restifyServer = restify.createServer();

restify.CORS.ALLOW_HEADERS.push("content-type");
restify.CORS.ALLOW_HEADERS.push("authorization");
restifyServer.use(restify.bodyParser());
restifyServer.use(restify.queryParser());
restifyServer.use(restify.CORS());
restifyServer.use(restify.fullResponse());

import { OpenStack } from './app.openstack';
new OpenStack().init(restifyServer);

restifyServer.get(/^\/(?!api\/).*/, restify.serveStatic({
  directory: '../angular',
  default: 'index.html'
}));

restifyServer.listen(7777, () => console.log('%s listening at %s', restifyServer.name, restifyServer.url));
