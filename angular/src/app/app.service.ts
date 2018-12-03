import { Injectable } from '@angular/core';
import { Http,  Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {
	userLogged: string;

	constructor(private http: Http) {}

	isLogged(): boolean{
		if(this.userLogged == 'logged'){
			return true;
		}else{
			return false;
		}
	}

	login(username: string, password: string): Observable<any>{
		return this.http.post('http://localhost:7777/api/login', {username: username, password: password})
			.map(response => {
				console.log(response.json())
				this.userLogged = response.json();
				return response.json();
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})

	}

	getNetworks(): Observable<any> {
		
		return this.http.get('http://localhost:7777/api/networks')
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	getSubnet(subnet: string): Observable<any> {
		
		return this.http.get('http://localhost:7777/api/subnet/'+subnet)
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	createNetwork(network: any): Observable<any> {
		
		return this.http.post('http://localhost:7777/api/networks', network)
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	createSubnet(subnet: any): Observable<any> {
		
		return this.http.post('http://localhost:7777/api/subnets', subnet)
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	getServers(): Observable<any> {
		
		return this.http.get('http://localhost:7777/api/servers')
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	getFlavors(): Observable<any> {
		
		return this.http.get('http://localhost:7777/api/flavors')
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	getImages(): Observable<any> {
		
		return this.http.get('http://localhost:7777/api/images')
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	createServer(server: any): Observable<any> {
		
		return this.http.post('http://localhost:7777/api/servers', server)
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	deleteServer(server: any): Observable<any> {
		
		return this.http.post('http://localhost:7777/api/server/destroy', server)
			.map(response => {
				return response.json()
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

	rebootServer(server: any): Observable<any> {
		
		return this.http.post('http://localhost:7777/api/server/reboot', server)
			.map(response => {
				console.log(response)
				return response
			})
			.catch(error => {
				console.log(error);
				return Observable.throw(error);
			})
	}

}