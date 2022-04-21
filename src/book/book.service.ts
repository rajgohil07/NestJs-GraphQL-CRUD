import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}
  async findAll(): Promise<BookEntity[] | { Message: string }> {
    const data = await this.bookRepository.find();
    if (data.length > 0) {
      return data;
    }
    throw new NotFoundException({ Message: 'No Data Found' });
  }
}
