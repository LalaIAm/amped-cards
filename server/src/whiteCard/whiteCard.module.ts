import { Module } from "@nestjs/common";
import { WhiteCardModuleBase } from "./base/whiteCard.module.base";
import { WhiteCardService } from "./whiteCard.service";
import { WhiteCardController } from "./whiteCard.controller";
import { WhiteCardResolver } from "./whiteCard.resolver";

@Module({
  imports: [WhiteCardModuleBase],
  controllers: [WhiteCardController],
  providers: [WhiteCardService, WhiteCardResolver],
  exports: [WhiteCardService],
})
export class WhiteCardModule {}
