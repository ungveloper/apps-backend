import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CentimeterCard, CentimeterType } from '@prisma/client';

@Injectable()
export class CentimeterService {
  constructor(private readonly prisma: PrismaService) {}

  async getCards(): Promise<CentimeterCard[]> {
    return await this.prisma.centimeterCard.findMany();
  }

  async getTypes(): Promise<CentimeterType[]> {
    return await this.prisma.centimeterType.findMany();
  }

  async getCardsByType(typeId: number): Promise<CentimeterCard[]> {
    return await this.prisma.centimeterCard.findMany({
      where: { typeId },
    });
  }
}
