import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Book' })
@ObjectType()
export class BookEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  ID: number;

  @CreateDateColumn()
  @Field((type) => Date)
  CreatedDate: Date;

  @UpdateDateColumn()
  @Field((type) => Date)
  UpdatedDate: Date;

  @Column()
  @Field()
  Name: string;

  @Column()
  @Field()
  Author: string;
}
