/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlackCardUpdateManyWithoutDecksInput } from "./BlackCardUpdateManyWithoutDecksInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { GameWhereUniqueInput } from "../../game/base/GameWhereUniqueInput";
import { WhiteCardUpdateManyWithoutDecksInput } from "./WhiteCardUpdateManyWithoutDecksInput";
@InputType()
class DeckUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BlackCardUpdateManyWithoutDecksInput,
  })
  @ValidateNested()
  @Type(() => BlackCardUpdateManyWithoutDecksInput)
  @IsOptional()
  @Field(() => BlackCardUpdateManyWithoutDecksInput, {
    nullable: true,
  })
  blackCards?: BlackCardUpdateManyWithoutDecksInput;

  @ApiProperty({
    required: false,
    type: () => GameWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameWhereUniqueInput)
  @IsOptional()
  @Field(() => GameWhereUniqueInput, {
    nullable: true,
  })
  game?: GameWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  identifier?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => WhiteCardUpdateManyWithoutDecksInput,
  })
  @ValidateNested()
  @Type(() => WhiteCardUpdateManyWithoutDecksInput)
  @IsOptional()
  @Field(() => WhiteCardUpdateManyWithoutDecksInput, {
    nullable: true,
  })
  whiteCards?: WhiteCardUpdateManyWithoutDecksInput;
}
export { DeckUpdateInput };
