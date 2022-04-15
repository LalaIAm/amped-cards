import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WhiteCardServiceBase } from "./base/whiteCard.service.base";

@Injectable()
export class WhiteCardService extends WhiteCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
