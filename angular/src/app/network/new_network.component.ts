import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../app.service';

import { Network } from './network';
import { Subnet } from './subnet';

@Component({
  moduleId: module.id,
  selector: 'new_network',
  templateUrl: 'new_network.component.html',
  styleUrls: ['network.component.css'],
})

export class NewNetworkComponent{

	network = new Network('',true,false,'');
	subnet = new Subnet('','',false,'','','',true);

	constructor(private route:ActivatedRoute,
				private router:Router,
				private appService:AppService) {}

	createNetwork(){
		this.appService.createNetwork(this.network).subscribe(r => {
			if(r != null){
				console.log(r)
				this.subnet.networkId = r.id;
				console.log(this.subnet)
				this.appService.createSubnet(this.subnet).subscribe(r => {
					if(r != null){
						this.router.navigateByUrl('/networks');
					}
				})
			}
		})
	}
}
