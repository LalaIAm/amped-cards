import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WhiteCardResolverBase } from "./base/whiteCard.resolver.base";
import { WhiteCard } from "./base/WhiteCard";
import { WhiteCardService } from "./whiteCard.service";

@graphql.Resolver(() => WhiteCard)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WhiteCardResolver extends WhiteCardResolverBase {
  constructor(
    protected readonly service: WhiteCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
