/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Deck, BlackCard, WhiteCard, Game } from "@prisma/client";

export class DeckServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DeckFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeckFindManyArgs>
  ): Promise<number> {
    return this.prisma.deck.count(args);
  }

  async findMany<T extends Prisma.DeckFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeckFindManyArgs>
  ): Promise<Deck[]> {
    return this.prisma.deck.findMany(args);
  }
  async findOne<T extends Prisma.DeckFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeckFindUniqueArgs>
  ): Promise<Deck | null> {
    return this.prisma.deck.findUnique(args);
  }
  async create<T extends Prisma.DeckCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeckCreateArgs>
  ): Promise<Deck> {
    return this.prisma.deck.create<T>(args);
  }
  async update<T extends Prisma.DeckUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeckUpdateArgs>
  ): Promise<Deck> {
    return this.prisma.deck.update<T>(args);
  }
  async delete<T extends Prisma.DeckDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeckDeleteArgs>
  ): Promise<Deck> {
    return this.prisma.deck.delete(args);
  }

  async findBlackCards(
    parentId: string,
    args: Prisma.BlackCardFindManyArgs
  ): Promise<BlackCard[]> {
    return this.prisma.deck
      .findUnique({
        where: { id: parentId },
      })
      .blackCards(args);
  }

  async findWhiteCards(
    parentId: string,
    args: Prisma.WhiteCardFindManyArgs
  ): Promise<WhiteCard[]> {
    return this.prisma.deck
      .findUnique({
        where: { id: parentId },
      })
      .whiteCards(args);
  }

  async getGame(parentId: string): Promise<Game | null> {
    return this.prisma.deck
      .findUnique({
        where: { id: parentId },
      })
      .game();
  }
}
