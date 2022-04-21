import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookEntity {
  @Field((type) => Int)
  ID: number;

  @Field()
  Name: string;

  @Field()
  Author: string;
}
