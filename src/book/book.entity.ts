import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookEntity {
  @Field((type) => Int)
  ID: number;

  Name: string;

  Author: string;
}
