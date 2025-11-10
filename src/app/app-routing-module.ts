import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { NotFound } from './not-found/not-found';

const routes: Routes = [
  // NOTA
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: "login", component: Login },
  { path: "singup", component: Register },
  {
    // NOTA
    path: "store",
    loadChildren: () =>
      import('./store/store-module').then((m) => m.StoreModule),
  },
  // NOTA
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
