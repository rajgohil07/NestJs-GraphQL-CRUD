import { Query, Resolver } from '@nestjs/graphql';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';

@Resolver((of) => BookEntity)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [BookEntity])
  findAll(): Promise<BookEntity[]> {
    return this.bookService.findAll();
  }
}
