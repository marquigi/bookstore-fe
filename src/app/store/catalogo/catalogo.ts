import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo-service';
import { CategoryWithCount } from '../../models/book.interface';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  // NOTA
  private readonly catService = inject(CatalogoService);

  categories?: CategoryWithCount[];

  // NOTA
  ngOnInit() {
    this.categories = this.catService.getCategories();
  }



}
