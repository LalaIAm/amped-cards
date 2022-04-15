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
import { DeckWhereUniqueInput } from "../../deck/base/DeckWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { RoundCreateNestedManyWithoutBlackCardsInput } from "./RoundCreateNestedManyWithoutBlackCardsInput";
@InputType()
class BlackCardCreateInput {
  @ApiProperty({
    required: false,
    type: () => DeckWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeckWhereUniqueInput)
  @IsOptional()
  @Field(() => DeckWhereUniqueInput, {
    nullable: true,
  })
  deck?: DeckWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  discarded?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => RoundCreateNestedManyWithoutBlackCardsInput,
  })
  @ValidateNested()
  @Type(() => RoundCreateNestedManyWithoutBlackCardsInput)
  @IsOptional()
  @Field(() => RoundCreateNestedManyWithoutBlackCardsInput, {
    nullable: true,
  })
  rounds?: RoundCreateNestedManyWithoutBlackCardsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;
}
export { BlackCardCreateInput };
