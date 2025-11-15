import { Injectable } from '@angular/core';
import { Book, CategoryWithCount } from '../models/book.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {

  // NOTA
  private catalogo: Book[] = [
    {
      ean: 'EAN000000001',
      author: 'J.K. Rowling',
      category: { id: 1, name: 'Bambini' },
      image: 'https://covers.openlibrary.org/b/isbn/9780747532743-L.jpg',
      n_pages: 320,
      title: 'Harry Potter e la Pietra Filosofale',
      price: 1244.99,
      on_sale: true,
      publisher: { id: 2, name: 'Salani' },
      year: 1997,
    },
    {
      ean: 'EAN000000002',
      author: 'George Orwell',
      category: { id: 2, name: 'Narrativa' },
      image: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
      n_pages: 328,
      title: '1984',
      price: 11.5,
      publisher: { id: 3, name: 'Mondadori' },
      year: 1949,
    },
    {
      ean: 'EAN000000003',
      author: 'Harper Lee',
      category: { id: 2, name: 'Narrativa' },
      image: 'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg',
      n_pages: 281,
      title: 'Il buio oltre la siepe',
      price: 13.9,
      publisher: { id: 3, name: 'Mondadori' },
      year: 1960,
    },
    {
      ean: 'EAN000000004',
      author: 'J.R.R. Tolkien',
      category: { id: 3, name: 'Fantasy' },
      image: 'https://covers.openlibrary.org/b/isbn/9780261102385-L.jpg',
      n_pages: 423,
      title: 'Il Signore degli Anelli',
      price: 18.99,
      publisher: { id: 4, name: 'Adelphi' },
      year: 1954,
    },
    {
      ean: 'EAN000000005',
      author: 'Dan Brown',
      category: { id: 4, name: 'Thriller' },
      image: 'https://covers.openlibrary.org/b/isbn/9780385504201-L.jpg',
      n_pages: 489,
      title: 'Il Codice Da Vinci',
      price: 16.5,
      publisher: { id: 5, name: 'Mondolibri' },
      year: 2003,
    },
    {
      ean: 'EAN000000006',
      author: 'Paulo Coelho',
      category: { id: 2, name: 'Narrativa' },
      image: 'https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg',
      n_pages: 208,
      title: "L'alchimista",
      price: 10.99,
      publisher: { id: 6, name: 'La Feltrinelli' },
      year: 1988,
    },
    {
      ean: 'EAN000000007',
      author: 'Stephen King',
      category: { id: 5, name: 'Horror' },
      image: 'https://covers.openlibrary.org/b/isbn/9781501142970-L.jpg',
      n_pages: 1138,
      title: 'IT',
      price: 21.0,
      publisher: { id: 7, name: 'Sperling & Kupfer' },
      year: 1986,
    },
    {
      ean: 'EAN000000008',
      author: 'Khaled Hosseini',
      category: { id: 2, name: 'Narrativa' },
      image: 'https://covers.openlibrary.org/b/isbn/9781594480003-L.jpg',
      n_pages: 372,
      title: 'Il cacciatore di aquiloni',
      price: 13.49,
      publisher: { id: 8, name: 'Piemme' },
      year: 2003,
    },
    {
      ean: 'EAN000000009',
      author: 'Ernest Hemingway',
      category: { id: 6, name: 'Classici' },
      image: 'https://covers.openlibrary.org/b/isbn/9780684801223-L.jpg',
      n_pages: 144,
      title: 'Il vecchio e il mare',
      price: 9.99,
      publisher: { id: 9, name: 'Rizzoli' },
      year: 1952,
    },
    {
      ean: 'EAN000000010',
      author: 'Jane Austen',
      category: { id: 6, name: 'Classici' },
      image: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg',
      n_pages: 279,
      title: 'Orgoglio e Pregiudizio',
      price: 10.49,
      publisher: { id: 9, name: 'Rizzoli' },
      year: 1813,
    },
    {
      ean: 'EAN000000011',
      author: 'Leo Tolstoy',
      category: { id: 6, name: 'Classici' },
      image: 'https://covers.openlibrary.org/b/isbn/9780140447934-L.jpg',
      n_pages: 1225,
      title: 'Guerra e Pace',
      price: 22.99,
      publisher: { id: 4, name: 'Adelphi' },
      year: 1869,
    },
    {
      ean: 'EAN000000012',
      author: 'Agatha Christie',
      category: { id: 4, name: 'Thriller' },
      image: 'https://covers.openlibrary.org/b/isbn/9780062073488-L.jpg',
      n_pages: 256,
      title: 'Dieci piccoli indiani',
      price: 12.0,
      publisher: { id: 3, name: 'Mondadori' },
      year: 1939,
    },
    {
      ean: 'EAN000000013',
      author: 'Isaac Asimov',
      category: { id: 7, name: 'Fantascienza' },
      image: 'https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg',
      n_pages: 255,
      title: 'Fondazione',
      price: 14.75,
      on_sale: true,
      publisher: { id: 10, name: 'Nord' },
      year: 1951,
    },
    {
      ean: 'EAN000000014',
      author: 'Douglas Adams',
      category: { id: 7, name: 'Fantascienza' },
      image: 'https://covers.openlibrary.org/b/isbn/9780345391803-L.jpg',
      n_pages: 224,
      on_sale: true,
      title: 'Guida galattica per gli autostoppisti',
      price: 12.8,
      publisher: { id: 10, name: 'Nord' },
      year: 1979,
    },
    {
      ean: 'EAN000000015',
      author: 'Markus Zusak',
      category: { id: 2, name: 'Narrativa' },
      image: 'https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg',
      n_pages: 576,
      title: 'La ladra di libri',
      price: 15.2,
      publisher: { id: 11, name: 'Frassinelli' },
      year: 2005,
    },
    {
      ean: 'EAN000000016',
      author: 'Margaret Atwood',
      category: { id: 2, name: 'Narrativa' },
      image: 'https://covers.openlibrary.org/b/isbn/9780385490818-L.jpg',
      n_pages: 311,
      title: "Il racconto dell'ancella",
      price: 13.9,
      publisher: { id: 12, name: 'Ponte alle Grazie' },
      year: 1985,
    },
    {
      ean: 'EAN000000017',
      author: 'Umberto Eco',
      category: { id: 2, name: 'Narrativa' },
      image: 'https://covers.openlibrary.org/b/isbn/9780156030434-L.jpg',
      n_pages: 512,
      title: 'Il nome della rosa',
      price: 17.99,
      publisher: { id: 1, name: 'Bompiani' },
      year: 1980,
    },
    {
      ean: 'EAN000000018',
      author: 'Franz Kafka',
      category: { id: 6, name: 'Classici' },
      image: 'https://covers.openlibrary.org/b/isbn/9780553213690-L.jpg',
      n_pages: 201,
      title: 'La metamorfosi',
      price: 8.99,
      publisher: { id: 13, name: 'Newton Compton' },
      year: 1915,
    },
    {
      ean: 'EAN000000019',
      author: 'Mary Shelley',
      category: { id: 5, name: 'Horror' },
      image: 'https://covers.openlibrary.org/b/isbn/9780486282114-L.jpg',
      n_pages: 280,
      title: 'Frankenstein',
      price: 9.9,
      publisher: { id: 13, name: 'Newton Compton' },
      year: 1818,
    },
    {
      ean: 'EAN000000020',
      author: 'Louisa May Alcott',
      category: { id: 1, name: 'Bambini' },
      image: 'https://covers.openlibrary.org/b/isbn/9780147514011-L.jpg',
      n_pages: 352,
      on_sale: true,
      title: 'Piccole donne',
      price: 10.0,
      publisher: { id: 2, name: 'Salani' },
      year: 1868,
    },
    {
      ean: 'EAN000000021',
      author: 'Lewis Carroll',
      category: { id: 1, name: 'Bambini' },
      image: 'https://covers.openlibrary.org/b/isbn/9780141321073-L.jpg',
      n_pages: 200,
      title: 'Alice nel paese delle meraviglie',
      price: 9.5,
      publisher: { id: 2, name: 'Salani' },
      year: 1865,
    },
    {
      ean: 'EAN000000022',
      author: 'Roald Dahl',
      category: { id: 1, name: 'Bambini' },
      image: 'https://covers.openlibrary.org/b/isbn/9780142410318-L.jpg',
      n_pages: 176,
      title: 'La fabbrica di cioccolato',
      price: 11.0,
      publisher: { id: 2, name: 'Salani' },
      year: 1964,
    },
    {
      ean: 'EAN000000023',
      author: 'C.S. Lewis',
      category: { id: 3, name: 'Fantasy' },
      image: 'https://covers.openlibrary.org/b/isbn/9780064471046-L.jpg',
      n_pages: 208,
      title: "Il leone, la strega e l'armadio",
      price: 12.6,
      publisher: { id: 14, name: 'HarperCollins' },
      year: 1950,
    },
    {
      ean: 'EAN000000024',
      author: 'Suzanne Collins',
      category: { id: 3, name: 'Fantasy' },
      image: 'https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg',
      n_pages: 374,
      title: 'Hunger Games',
      price: 14.99,
      publisher: { id: 15, name: 'Mondadori' },
      year: 2008,
    },
    {
      ean: 'EAN000000025',
      author: 'Rick Riordan',
      category: { id: 3, name: 'Fantasy' },
      image: 'https://covers.openlibrary.org/b/isbn/9781423134947-L.jpg',
      n_pages: 377,
      title: "Percy Jackson e gli dei dell'Olimpo",
      price: 13.45,
      publisher: { id: 16, name: 'Disney Libri' },
      year: 2005,
    },
  ];

  constructor() { }

  getSales() {
    // NOTA
    return of(this.catalogo.filter((b) => b.on_sale === true));
  }

  // NOTA
  getCategories(): CategoryWithCount[] {

    let r: CategoryWithCount[] = [];

    //...?

    // Ciclo su ogni libro di tutto il catalogo
    for (let b of this.catalogo) {
      // prendo la categoria del libro
      const cat = b.category;
      // se la categoria è gia presente in r
      if (r.findIndex(c => c.category.id === cat.id) !== -1) {
        // allora aumento n_book
        r.find((c) => c.category.id === cat.id)!.n_books += 1;
      } else { // se la categoria non è presente
        // la metto in r con n_book = 1
        r.push({ category: cat, n_books: 1 });
      }

    }

    return r;
  }
}