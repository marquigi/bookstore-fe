import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-card-book',
  standalone: false,
  templateUrl: './card-book.html',
  styleUrl: './card-book.css',
})
export class CardBook {

  // NOTA
  @Input('libro') book?: Book;
}
