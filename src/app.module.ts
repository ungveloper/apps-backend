import { Module } from '@nestjs/common';
import { CentimeterModule } from './centimeter/centimeter.module';
import { AppController } from './app.controller';

@Module({
  imports: [CentimeterModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
