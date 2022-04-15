/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { Round } from "../../round/base/Round";
import { Game } from "../../game/base/Game";
import { WhiteCard } from "../../whiteCard/base/WhiteCard";
import { User } from "../../user/base/User";
@ObjectType()
class Player {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Round],
  })
  @ValidateNested()
  @Type(() => Round)
  @IsOptional()
  czars?: Array<Round>;

  @ApiProperty({
    required: false,
    type: () => Game,
  })
  @ValidateNested()
  @Type(() => Game)
  @IsOptional()
  game?: Game | null;

  @ApiProperty({
    required: false,
    type: () => [WhiteCard],
  })
  @ValidateNested()
  @Type(() => WhiteCard)
  @IsOptional()
  hand?: Array<WhiteCard>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User;
}
export { Player };
