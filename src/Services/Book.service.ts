import { Injectable } from '@nestjs/common';
import { Book } from 'src/data/Book.dto';

// import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BookService {
  public books: Book[] = [];

  addBookservice(book: Book): string {
    // book.id = uuidv4();
    this.books.push(book);
    return 'books has been succesfully added';
  }
  updateService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.id === book.id;
    });
    if (index === -1) {
      return 'Book not found';
    }
    this.books[index] = book;
    return 'book is succesfully updaed';
  }

  DeleteService(bookId: number): string {
    this.books.filter((book) => {
      return book.id !== bookId;
    });
    return 'book has been deleted ';
  }
  findAll(): Book[] {
    return this.books;
  }
}
