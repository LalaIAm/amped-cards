import { Module } from "@nestjs/common";
import { RoundModuleBase } from "./base/round.module.base";
import { RoundService } from "./round.service";
import { RoundController } from "./round.controller";
import { RoundResolver } from "./round.resolver";

@Module({
  imports: [RoundModuleBase],
  controllers: [RoundController],
  providers: [RoundService, RoundResolver],
  exports: [RoundService],
})
export class RoundModule {}
