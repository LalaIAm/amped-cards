import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeckService } from "./deck.service";
import { DeckControllerBase } from "./base/deck.controller.base";

@swagger.ApiTags("decks")
@common.Controller("decks")
export class DeckController extends DeckControllerBase {
  constructor(
    protected readonly service: DeckService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
