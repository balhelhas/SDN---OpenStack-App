import pkgcloud = require('pkgcloud');

export class OpenStack{

	private clientNetwork: any;
	private clientCompute: any;

	private handleError = (err: string, response: any, next: any) => {
    	response.send(500, err);
	    next();
    }

    public login = (request: any, response: any, next: any ) => {
    	let username = request.body.username
    	let password = request.body.password


    	this.clientNetwork = pkgcloud.network.createClient({
			provider: 'openstack', 
		    username: username, 
		    password: password, 
		    region: 'RegionOne',
		    authUrl: 'http://192.168.137.25/identity' 
		});
		this.clientCompute = pkgcloud.compute.createClient({
			provider: 'openstack', 
		    username: username, 
		    password: password, 
		    region: 'RegionOne',
		    authUrl: 'http://192.168.137.25/identity' 
		});

		response.json('logged');
	}

	public getNetworks = (request: any, response: any, next: any ) => {
		this.clientNetwork.getNetworks((err, networks) => {
			if(err) {
				this.handleError(err,response,next);
			}
			response.json(networks);
		})
	}

	public createNetwork = (request: any, response: any, next: any ) => {
		let options = request.body

		this.clientNetwork.createNetwork(options,(err, network) => {
			if(err) {
				this.handleError(err,response,next);
			}
			response.json(network);
		})
	}

	public getSubnet = (request: any, response: any, next: any ) => {
		let subnet = request.params.id

		this.clientNetwork.getSubnet(subnet,(err, subnet) => {
			if(err) {
				this.handleError(err,response,next);
			}
			response.json(subnet);
		})
	}

	public createSubnet = (request: any, response: any, next: any ) => {
		let options = request.body

		this.clientNetwork.createSubnet(options,(err, network) => {
			if(err) {
				console.log(err)
				this.handleError(err,response,next);
			}
			response.json(network);
		})
	}

	public getServers = (request: any, response: any, next: any ) => {

		this.clientCompute.getServers((err, servers) => {
			if(err) {
				this.handleError(err,response,next);
			}
			response.json(servers);
		})
	}

	public getFlavors = (request: any, response: any, next: any ) => {

		this.clientCompute.getFlavors((err, flavors) => {
			if(err) {
				this.handleError(err,response,next);
			}
			response.json(flavors);
		})
	} 

	public getImages = (request: any, response: any, next: any ) => {

		this.clientCompute.getImages((err, images) => {
			if(err) {
				this.handleError(err,response,next);
			}
			response.json(images);
		})
	}

	public createServer = (request: any, response: any, next: any ) => {
		let options = request.body
		console.log(options)

		this.clientCompute.createServer(options, (err, server) => {
			if(err) {
				console.log(err);
				this.handleError(err,response,next);
			}
			response.json(server);
		})
	}

	public deleteServer = (request: any, response: any, next: any ) => {
		let server = request.body

		this.clientCompute.destroyServer(server, (err, server) => {
			if(err) {
				console.log(err);
				this.handleError(err,response,next);
			}
			response.json(server);
		})
	}

	public rebootServer = (request: any, response: any, next: any ) => {
		let server = request.body

		this.clientCompute.rebootServer(server, (err, confirm) => {
			if(err) {
				console.log(err);
				this.handleError(err,response,next);
			}
			response.json(confirm);
		})
	}

	public init (server: any) {
		server.get('/api/networks', this.getNetworks);
		server.get('/api/subnet/:id', this.getSubnet);
		server.get('/api/servers', this.getServers);
		server.get('/api/flavors', this.getFlavors);
		server.get('/api/images', this.getImages);
		server.post('/api/networks', this.createNetwork);
		server.post('/api/subnets', this.createSubnet);
		server.post('/api/servers', this.createServer);
		server.post('/api/server/destroy', this.deleteServer);
		server.post('/api/server/reboot', this.rebootServer);
		server.post('/api/login', this.login);
	}
}