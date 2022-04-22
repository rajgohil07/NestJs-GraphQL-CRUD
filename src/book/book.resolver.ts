import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';
import { createBook } from './dto/createBook';

@Resolver((of) => BookEntity)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [BookEntity])
  findAll(): Promise<BookEntity[] | { Message: string }> {
    return this.bookService.findAll();
  }

  @Mutation((returns) => BookEntity)
  createBook(
    @Args('bookData')
    bookData: createBook,
  ): Promise<BookEntity> {
    return this.bookService.createBook(bookData);
  }

  @Query((returns) => BookEntity)
  findBookByID(
    @Args('ID', { type: () => Int }) ID: number,
  ): Promise<BookEntity> {
    return this.bookService.findBookByID(ID);
  }
}
