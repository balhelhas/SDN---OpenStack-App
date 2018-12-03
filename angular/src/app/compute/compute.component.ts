import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'compute',
  templateUrl: 'compute.component.html',
})

export class ComputeComponent implements OnInit{

	servers: any[] = []
	flavors: any[] = []

	constructor(private route:ActivatedRoute,
				private router:Router,
				private appService:AppService) {}

	

	ngOnInit(){
		this.refreshCompute();
	}

	refreshCompute(){
		this.servers = []
		this.flavors = []
		this.appService.getServers().subscribe(r => {
	 		r.forEach((server:any) => {
	 			this.servers.push(server)
	 		})

	 		console.log(this.servers)
	 	})
	 	this.appService.getFlavors().subscribe(r => {
	 		r.forEach((flavor:any) => {
	 			this.flavors.push(flavor)
	 		})
	 		console.log(this.flavors)
	 	})
	}

	createInstance(){
		this.router.navigateByUrl('/compute/new');
	}

	rebootInstance(server:any){
		this.appService.rebootServer(server).subscribe(r => {
			this.refreshCompute();
		})
	}

	deleteInstance(server:any){
		this.appService.deleteServer(server).subscribe(r => {
			this.refreshCompute();
		})
	}


}