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
import { BlackCardListRelationFilter } from "../../blackCard/base/BlackCardListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { GameWhereUniqueInput } from "../../game/base/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WhiteCardListRelationFilter } from "../../whiteCard/base/WhiteCardListRelationFilter";
@InputType()
class DeckWhereInput {
  @ApiProperty({
    required: false,
    type: () => BlackCardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BlackCardListRelationFilter)
  @IsOptional()
  @Field(() => BlackCardListRelationFilter, {
    nullable: true,
  })
  blackCards?: BlackCardListRelationFilter;

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
  game?: GameWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  identifier?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => WhiteCardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WhiteCardListRelationFilter)
  @IsOptional()
  @Field(() => WhiteCardListRelationFilter, {
    nullable: true,
  })
  whiteCards?: WhiteCardListRelationFilter;
}
export { DeckWhereInput };
