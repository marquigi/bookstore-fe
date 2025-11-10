import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing-module';
import { Layout } from './layout/layout';
import { Vetrina } from './vetrina/vetrina';
import { Catalogo } from './catalogo/catalogo';


@NgModule({
  declarations: [
    Layout,
    Vetrina,
    Catalogo
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
