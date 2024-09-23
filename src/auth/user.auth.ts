import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './user.passport-local';

import { BookModule } from 'src/modules/Book.module';

@Module({
  imports: [BookModule],

  controllers: [],
  providers: [PassportLocalStrategy],
})
export class AuthModule {}
