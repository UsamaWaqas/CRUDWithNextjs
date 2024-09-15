import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BookService } from 'src/Services/Book.service';
import { Book } from 'src/data/Book.dto';
@Controller('/book')
export class BookController {
  constructor(private BookService: BookService) {}
  @Get('/findAll')
  getAllbooks(): Book[] {
    return this.BookService.findAll();
  }
  @Put('/update')
  updatebook(@Body() book: Book): string {
    return this.BookService.updateService(book);
  }
  @Delete('/delete/:id')
  deletebook(@Param('id') bookId: string): string {
    return this.BookService.DeleteService(bookId);
  }
  @Post('/add')
  addbook(@Body() book: Book): string {
    return this.BookService.addBookservice(book);
  }
}
