import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from 'src/controllers/Book.controller';
import { BookService } from 'src/Services/Book.service';

import { Bookmiddleware } from 'src/middleware/Book.middleware';
// import { userService } from 'src/Services/user.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
  exports: [],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Bookmiddleware).forRoutes('/book');
  }
}
