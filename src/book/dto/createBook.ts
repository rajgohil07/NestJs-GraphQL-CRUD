import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createBook {
  @Field()
  Name: string;

  @Field()
  Author: string;
}
