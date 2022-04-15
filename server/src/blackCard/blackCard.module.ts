import { Module } from "@nestjs/common";
import { BlackCardModuleBase } from "./base/blackCard.module.base";
import { BlackCardService } from "./blackCard.service";
import { BlackCardController } from "./blackCard.controller";
import { BlackCardResolver } from "./blackCard.resolver";

@Module({
  imports: [BlackCardModuleBase],
  controllers: [BlackCardController],
  providers: [BlackCardService, BlackCardResolver],
  exports: [BlackCardService],
})
export class BlackCardModule {}
