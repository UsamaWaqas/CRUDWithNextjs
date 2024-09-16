import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from 'src/controllers/Book.controller';
import { BookService } from 'src/Services/Book.service';

import { Bookmiddleware } from 'src/middleware/Book.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Bookmiddleware).forRoutes('/book');
  }
}
