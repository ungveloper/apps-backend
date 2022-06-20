import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CentimeterService } from './centimeter.service';
import { Card } from './entities/card.entity';

@Controller('centimeter')
export class CentimeterController {
  constructor(private readonly centimeterServices: CentimeterService) {}

  @Get()
  getAll(): Card[] {
    return this.centimeterServices.getAll();
  }

  @Get(':id')
  getOne(@Param('id') cardId: string): Card {
    const card = this.centimeterServices.getOne(cardId);
    if (!card) {
      throw new NotFoundException(`Card Id: ${cardId} is not found`);
    }
    return card;
  }

  @Post()
  create(@Body() cardData) {
    return this.centimeterServices.create(cardData);
  }

  @Delete(':id')
  remove(@Param('id') cardId: string) {
    return this.centimeterServices.deleteOne(cardId);
  }

  @Patch(':id')
  patch(@Param('id') cardId: string, @Body() updateData) {
    return this.centimeterServices.update(cardId, updateData);
  }
}
