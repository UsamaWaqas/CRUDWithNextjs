import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Book } from 'src/data/Book.dto';
import { userService } from 'src/Services/user.service';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: userService) {
    super();
  }

  validate(username: string, Password: string): Book {
    const user: Book = this.authService.getUerByName(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.password === Password) return user;
  }
}
