import { inject, Pipe, PipeTransform } from '@angular/core';
import { Book } from '../../models/book.interface';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'onSale',
  standalone: false
})
export class OnSalePipe implements PipeTransform {

  // NOTA
  private cPipe = inject(CurrencyPipe)

  // NOTA
  transform(value: Book, ...args: unknown[]): string {

    // NOTA
    if (value.on_sale === true) {
      // NOTA
      return `
      <del class="text-muted">${this.cPipe.transform(value.price, "EUR", "symbol", ".2-2")}</del>
      <span class="text-success">${this.cPipe.transform(value.price * 0.85, "EUR", "symbol", ".2-2")}</span>`;
    }
    // NOTA
    return `${this.cPipe.transform(value.price, "EUR", "symbol", ".2-2")}`
  }

}

