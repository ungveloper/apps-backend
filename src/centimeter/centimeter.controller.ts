import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CentimeterService } from './centimeter.service';
import { Card, Type } from './entities/card.entity';

@Controller('centimeter')
export class CentimeterController {
  constructor(private readonly centimeterServices: CentimeterService) {}

  @Get('cards')
  async getCards(): Promise<Card[]> {
    return await this.centimeterServices.getCards();
  }

  @Get('types')
  async getTypes(): Promise<Type[]> {
    return await this.centimeterServices.getTypes();
  }

  @Get(':typeId/cards')
  async getCardsByType(@Param('typeId') typeId: number): Promise<Card[]> {
    const cards = await this.centimeterServices.getCardsByType(typeId);

    if (!cards) {
      throw new NotFoundException(`Card Id: ${typeId} is not found`);
    }
    return cards;
  }
}
