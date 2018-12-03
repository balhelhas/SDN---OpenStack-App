import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetworksComponent } from './network/networks.component';
import { NewNetworkComponent } from './network/new_network.component';

import { ComputeComponent } from './compute/compute.component';
import { NewComputeComponent } from './compute/new_compute.component';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  	{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
  	{ path: 'networks', component: NetworksComponent },
  	{ path: 'network/new', component: NewNetworkComponent },
  	{ path: 'compute', component: ComputeComponent },
  	{ path: 'compute/new', component: NewComputeComponent },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
