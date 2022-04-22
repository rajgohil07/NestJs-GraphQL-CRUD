import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { BookEntity } from './book.entity';
import { createBook } from './dto/createBook';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  // get all data from database
  async findAll(): Promise<BookEntity[] | { Message: string }> {
    const data = await this.bookRepository.find();
    if (data.length > 0) {
      return data;
    }
    throw new NotFoundException('No Data Found');
  }

  // create new book Data
  async createBook(bookData: createBook): Promise<BookEntity> {
    const dataToBeCreated = this.bookRepository.create(bookData);
    return this.bookRepository.save(dataToBeCreated);
  }

  async findBookByID(ID: number): Promise<BookEntity> {
    const data = await this.bookRepository.findOne({
      where: { ID },
    });
    if (data) {
      return data;
    }
    throw new NotFoundException('Specified book does not exist!');
  }
}
