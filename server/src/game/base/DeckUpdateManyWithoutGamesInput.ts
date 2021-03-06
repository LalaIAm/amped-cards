/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DeckWhereUniqueInput } from "../../deck/base/DeckWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class DeckUpdateManyWithoutGamesInput {
  @Field(() => [DeckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeckWhereUniqueInput],
  })
  connect?: Array<DeckWhereUniqueInput>;

  @Field(() => [DeckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeckWhereUniqueInput],
  })
  disconnect?: Array<DeckWhereUniqueInput>;

  @Field(() => [DeckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeckWhereUniqueInput],
  })
  set?: Array<DeckWhereUniqueInput>;
}
export { DeckUpdateManyWithoutGamesInput };
