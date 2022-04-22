import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';
import { createBook } from './dto/createBook';
import { deleteUserByID } from './dto/deletedUserID';

@Resolver(() => BookEntity)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [BookEntity])
  findAll(): Promise<BookEntity[] | { Message: string }> {
    return this.bookService.findAll();
  }

  @Mutation(() => BookEntity)
  createBook(
    @Args('bookData')
    bookData: createBook,
  ): Promise<BookEntity> {
    return this.bookService.createBook(bookData);
  }

  @Query(() => BookEntity)
  findBookByID(
    @Args('ID', { type: () => Int }) ID: number,
  ): Promise<BookEntity> {
    return this.bookService.findBookByID(ID);
  }

  @Mutation(() => deleteUserByID)
  deleteBookByID(
    @Args('ID', { type: () => Int }) ID: number,
  ): Promise<{ deletedRecordCount: number }> {
    return this.bookService.deleteBookByID(ID);
  }
}
