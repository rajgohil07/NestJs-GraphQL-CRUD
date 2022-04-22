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
  @Field(() => Int)
  ID: number;

  @CreateDateColumn()
  @Field(() => Date)
  CreatedDate: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  UpdatedDate: Date;

  @Column()
  @Field()
  Name: string;

  @Column()
  @Field()
  Author: string;
}
