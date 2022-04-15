import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoundService } from "./round.service";
import { RoundControllerBase } from "./base/round.controller.base";

@swagger.ApiTags("rounds")
@common.Controller("rounds")
export class RoundController extends RoundControllerBase {
  constructor(
    protected readonly service: RoundService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
