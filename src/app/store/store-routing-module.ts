import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Vetrina } from './vetrina/vetrina';
import { Catalogo } from './catalogo/catalogo';

const routes: Routes = [
  {
    path: '', component: Layout,
    children: [
      { path: '', component: Vetrina },
      { path: 'catalogo', component: Catalogo }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
