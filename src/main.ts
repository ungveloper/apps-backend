import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;

  await app.listen(PORT, handleListening);

  function handleListening() {
    console.log(`🚀 Listening on: http://localhost:${PORT}`);
  }
}
bootstrap();
