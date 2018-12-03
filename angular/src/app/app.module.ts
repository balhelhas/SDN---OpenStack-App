import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';

import { LoginComponent } from './login/login.component';

import { NetworksComponent } from './network/networks.component';
import { NewNetworkComponent } from './network/new_network.component';

import { ComputeComponent } from './compute/compute.component';
import { NewComputeComponent } from './compute/new_compute.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RoutingModule ],
  declarations: [ AppComponent, LoginComponent, NetworksComponent, NewNetworkComponent, ComputeComponent, NewComputeComponent],
  bootstrap:    [ AppComponent ],
  providers: 	[ AppService ]
})
export class AppModule { }
