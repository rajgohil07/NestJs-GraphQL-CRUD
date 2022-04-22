import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class deleteUserByID {
  @Field(() => Int)
  deletedRecordCount: number;
}
