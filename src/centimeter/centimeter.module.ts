import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CentimeterController } from './centimeter.controller';
import { CentimeterService } from './centimeter.service';

@Module({
  controllers: [CentimeterController],
  providers: [PrismaService, CentimeterService],
})
export class CentimeterModule {}
