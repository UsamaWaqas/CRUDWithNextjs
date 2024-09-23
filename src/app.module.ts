/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookModule } from './modules/Book.module';
//  import { userService } from './Services/user.service';




@Module({
  imports: [BookModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
