import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BlackCardResolverBase } from "./base/blackCard.resolver.base";
import { BlackCard } from "./base/BlackCard";
import { BlackCardService } from "./blackCard.service";

@graphql.Resolver(() => BlackCard)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlackCardResolver extends BlackCardResolverBase {
  constructor(
    protected readonly service: BlackCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
