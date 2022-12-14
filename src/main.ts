import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //NestFactory create new nest application
  const app = await NestFactory.create(AppModule);
  //listen on port 3000
  await app.listen(3000);
}
bootstrap();
