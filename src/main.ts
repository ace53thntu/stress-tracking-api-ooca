import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger();

  await app.listen(process.env.PORT);

  logger.log(`==========================================================`);

  logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');

  logger.log(`==========================================================`);
}
bootstrap();