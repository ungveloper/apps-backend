import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CentimeterService {
  private cards: Card[] = [];

  getAll(): Card[] {
    return this.cards;
  }

  getOne(id: number): Card {
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
}
