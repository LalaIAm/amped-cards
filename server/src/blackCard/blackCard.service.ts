import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BlackCardServiceBase } from "./base/blackCard.service.base";

@Injectable()
export class BlackCardService extends BlackCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
