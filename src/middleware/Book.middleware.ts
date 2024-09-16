import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Bookmiddleware implements NestMiddleware {
  use(req: Request, res: Response, Next: NextFunction) {
    console.log('this is class based middleware');
    Next();
  }
}
