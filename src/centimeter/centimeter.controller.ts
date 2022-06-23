import {
  Controller,
  Get,
  /* 
  Body,
  Delete,
  NotFoundException,
  Param,
  Patch,
  Post,
   */
} from '@nestjs/common';
import { CentimeterService } from './centimeter.service';
/* 
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
 */
import { Card } from './entities/card.entity';

@Controller('centimeter')
export class CentimeterController {
  constructor(private readonly centimeterServices: CentimeterService) {}

  @Get()
  async getAll(): Promise<Card[]> {
    return await this.centimeterServices.getAll();
  }
  /* 
  @Get(':id')
  getOne(@Param('id') cardId: number): Card {
    const card = this.centimeterServices.getOne(cardId);
    if (!card) {
      throw new NotFoundException(`Card Id: ${cardId} is not found`);
    }
    return card;
  }

  @Post()
  create(@Body() cardData: CreateCardDto) {
    return this.centimeterServices.create(cardData);
  }

  @Delete(':id')
  remove(@Param('id') cardId: number) {
    return this.centimeterServices.deleteOne(cardId);
  }

  @Patch(':id')
  patch(@Param('id') cardId: number, @Body() updateData: UpdateCardDto) {
    return this.centimeterServices.update(cardId, updateData);
  }
   */
}
