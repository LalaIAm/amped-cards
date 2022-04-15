import { Module } from "@nestjs/common";
import { DeckModuleBase } from "./base/deck.module.base";
import { DeckService } from "./deck.service";
import { DeckController } from "./deck.controller";
import { DeckResolver } from "./deck.resolver";

@Module({
  imports: [DeckModuleBase],
  controllers: [DeckController],
  providers: [DeckService, DeckResolver],
  exports: [DeckService],
})
export class DeckModule {}
