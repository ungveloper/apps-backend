import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
/* 
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
 */
import { CentimeterCard } from '@prisma/client';

@Injectable()
export class CentimeterService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<CentimeterCard[]> {
    return await this.prisma.centimeterCard.findMany();
  }

  async getCardsByType(typeId: number): Promise<CentimeterCard[]> {
    return await this.prisma.centimeterCard.findMany({
      where: { typeId },
    });
  }

  // Temporary Test Application
  async getRandomCardByType(typeId: number): Promise<CentimeterCard> {
    let randomValue = Math.floor(Math.random() * 100) + 1;

    if (typeId === 2) {
      randomValue = randomValue + 100;
    }

    return await this.prisma.centimeterCard.findFirst({
      where: { typeId, id: randomValue },
    });
  }

  /* 
  getOne(id: number) : Card {
    return this.cards.find((card) => card.id === id);
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.cards = this.cards.filter((card) => card.id !== id);
  }

  create(cardData: CreateCardDto) {
    this.cards.push({
      id: this.cards.length + 1,
      ...cardData,
    });
  }

  update(id: number, updateData: UpdateCardDto) {
    const card = this.getOne(id);
    this.deleteOne(id);
    this.cards.push({ ...card, ...updateData });
  }
   */
}
