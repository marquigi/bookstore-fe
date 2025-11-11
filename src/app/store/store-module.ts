import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing-module';
import { Layout } from './layout/layout';
import { Vetrina } from './vetrina/vetrina';
import { Catalogo } from './catalogo/catalogo';
import { CardBook } from './card-book/card-book';
import { OnSalePipe } from './pipes/on-sale-pipe';


@NgModule({
  declarations: [
    Layout,
    Vetrina,
    Catalogo,
    CardBook,
    OnSalePipe
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
