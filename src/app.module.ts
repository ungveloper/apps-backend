import { Module } from '@nestjs/common';
import { CentimeterController } from './centimeter/centimeter.controller';
import { CentimeterService } from './centimeter/centimeter.service';

@Module({
  imports: [],
  controllers: [CentimeterController],
  providers: [CentimeterService],
})
export class AppModule {}
