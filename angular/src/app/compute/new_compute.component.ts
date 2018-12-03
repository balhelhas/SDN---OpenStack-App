import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../app.service';

import { Instance } from './instance';

@Component({
  moduleId: module.id,
  selector: 'new_compute',
  templateUrl: 'new_compute.component.html',
})

export class NewComputeComponent implements OnInit{

	server = new Instance('','','','');
	images: any[] = []
	flavors: any[] = []
	networks: any[] = []

	constructor(private route:ActivatedRoute,
				private router:Router,
				private appService:AppService) {}

	ngOnInit(){
	 	this.appService.getFlavors().subscribe(r => {
	 		r.forEach((flavor:any) => {
	 			this.flavors.push(flavor)
	 		})
	 		console.log(this.flavors)
	 	})

	 	this.appService.getImages().subscribe(r => {
	 		r.forEach((image:any) => {
	 			this.images.push(image)
	 		})
	 		console.log(this.images)
	 	})

	 	this.appService.getNetworks().subscribe(r => {
	 		r.forEach((network:any) => {
	 			this.networks.push(network);
	 		})
	 		console.log(this.networks);
	 	})
	}

	createCompute(){
		console.log(this.server)
		this.appService.createServer(this.server).subscribe(r => {
			this.router.navigateByUrl('/compute');
		})
	}

}