import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlackCardService } from "./blackCard.service";
import { BlackCardControllerBase } from "./base/blackCard.controller.base";

@swagger.ApiTags("blackCards")
@common.Controller("blackCards")
export class BlackCardController extends BlackCardControllerBase {
  constructor(
    protected readonly service: BlackCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
