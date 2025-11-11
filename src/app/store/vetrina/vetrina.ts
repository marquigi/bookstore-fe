import { Component, inject } from '@angular/core';
import { Book } from '../../models/book.interface';
import { CatalogoService } from '../../services/catalogo-service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-vetrina',
  standalone: false,
  templateUrl: './vetrina.html',
  styleUrl: './vetrina.css',
})
export class Vetrina {

  // NOTA
  private readonly catService = inject(CatalogoService);

  books?: Book[];

  ngOnInit() {
    // NOTA
    this.catService
      .getSales()
      // NOTA
      .pipe(delay(300))
      // NOTA
      .subscribe({
        next: (b) => {
          this.books = b;
        },
        error: () => { }
      });
  }
}
