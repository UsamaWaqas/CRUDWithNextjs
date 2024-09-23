import { Injectable } from '@nestjs/common';
import { Book } from 'src/data/Book.dto';

@Injectable()
export class userService {
  public users: Book[] = [
    {
      UserName: 'user1',
      password: 'admin',
      id: 0,
      title: '',
      Author: '',
      Published: '',
    },
    {
      UserName: 'user3',
      password: 'admin',
      id: 1,
      title: '',
      Author: '',
      Published: '',
    },
    {
      UserName: 'user2',
      password: 'admin',
      id: 3,
      title: '',
      Author: '',
      Published: '',
    },
  ];

  getUerByName(username: string): Book {
    return this.users.find((User) => User.UserName === username);
  }
}
