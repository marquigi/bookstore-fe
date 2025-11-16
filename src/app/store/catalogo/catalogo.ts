import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo-service';
import { Book, CategoryWithCount } from '../../models/book.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  // NOTA
  private readonly catService = inject(CatalogoService);
  // NOTA
  private readonly ar = inject(ActivatedRoute);

  categories?: CategoryWithCount[];
  books?: Book[];
  nome_categoria?: string;

  // NOTA
  ngOnInit() {
    this.categories = this.catService.getCategories();
    // NOTA
    this.ar.params.subscribe((p) => {
      console.log(p['id_cat']);

      // Sfoglia categoria
      if (p['id_cat']) {
        // NOTA
        this.nome_categoria = this.categories!.find((c) => c.category.id === +p['id_cat'])!.category.name;
        // NOTA
        this.catService.getByCategory(+p['id_cat']).subscribe((bks => {
          this.books = bks;
        }))
      }
    })
  }



}
