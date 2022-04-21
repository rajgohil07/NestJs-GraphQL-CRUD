import { Injectable } from '@nestjs/common';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
  async findAll(): Promise<BookEntity[]> {
    return [
      {
        ID: 1,
        Name: '51 Days',
        Author: 'Edward parker',
      },
      {
        ID: 2,
        Name: '51 Days',
        Author: 'Edward parker',
      },
    ];
  }
}
