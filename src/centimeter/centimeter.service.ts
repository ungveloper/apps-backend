import { Injectable } from '@nestjs/common';
import { Card } from './entities/card.entity';

@Injectable()
export class CentimeterService {
  private cards: Card[] = [];

  getAll(): Card[] {
    return this.cards;
  }

  getOne(id: string): Card {
    return this.cards.find((card) => card.id === +id);
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.cards = this.cards.filter((card) => card.id !== +id);
  }

  create(cardData) {
    this.cards.push({
      id: this.cards.length + 1,
      ...cardData,
    });
  }

  update(id: string, updateData) {
    const card = this.getOne(id);
    this.deleteOne(id);
    this.cards.push({ ...card, ...updateData });
  }
}
