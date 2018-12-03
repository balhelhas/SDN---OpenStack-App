import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'networks',
  templateUrl: 'networks.component.html',
})

export class NetworksComponent implements OnInit{

	networks: any[] = []
	subnets: any[] = []

	constructor(private route:ActivatedRoute,
				private router:Router,
				private appService:AppService) {}

	

	ngOnInit(){
		this.appService.getNetworks().subscribe(r => {
	 		r.forEach((net:any) => {
	 			this.networks.push(net);
	 			net.subnets.forEach((subnet:any) => {
	 				this.appService.getSubnet(subnet).subscribe(r => {
	 					if(r != null) {
	 						this.subnets.push(r);
	 					}
	 				})
	 			})
	 		})

	 		console.log(this.subnets);
	 		console.log(this.networks);
	 	})

	}

	createNetwork(){
		this.router.navigateByUrl('/network/new');
	}


}