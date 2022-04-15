import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WhiteCardService } from "./whiteCard.service";
import { WhiteCardControllerBase } from "./base/whiteCard.controller.base";

@swagger.ApiTags("whiteCards")
@common.Controller("whiteCards")
export class WhiteCardController extends WhiteCardControllerBase {
  constructor(
    protected readonly service: WhiteCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
