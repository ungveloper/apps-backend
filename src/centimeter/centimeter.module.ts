import { Module } from '@nestjs/common';
import { CentimeterController } from './centimeter.controller';
import { CentimeterService } from './centimeter.service';

@Module({
  controllers: [CentimeterController],
  providers: [CentimeterService],
})
export class CentimeterModule {}
