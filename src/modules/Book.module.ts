import { Module } from '@nestjs/common';
import { BookController } from 'src/controllers/Book.controller';
import { BookService } from 'src/Services/Book.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
