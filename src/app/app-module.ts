import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { Login } from './login/login';
import { Register } from './register/register';
import { Main } from './main/main';
import { NotFound } from './not-found/not-found';
import { CurrencyPipe } from '@angular/common';


@NgModule({
  declarations: [Login, Register, Main, NotFound],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    CurrencyPipe
  ],
  bootstrap: [Main]
})
export class AppModule { }
