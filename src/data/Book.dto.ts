import { IsInt, IsString } from 'class-validator';

export class Book {
  @IsInt()
  id: number;
  @IsString()
  title: string;
  @IsString()
  Author: string;
  @IsString()
  Published: string;
}
