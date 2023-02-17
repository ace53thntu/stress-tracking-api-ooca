import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      bufferLogs: true,
    }
  );

  const logger = new Logger();

  // Set prefix
  app.setGlobalPrefix('/api');
  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });

  // configure Swagger
  const documentBuilder = new DocumentBuilder()
    .setTitle('Stress tracking API Documentation')
    .setDescription('Stress tracking API Documentation');
  if (process.env.API_VERSION) {
    documentBuilder.setVersion(process.env.API_VERSION);
  }
  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup('documentation', app, document);

  await app.listen(process.env.PORT);

  logger.log(`==========================================================`);

  logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');

  logger.log(`==========================================================`);

  logger.log(
    `Documentation: http://localhost:${process.env.PORT}/documentation`
  );

  logger.log(`==========================================================`);
}
bootstrap();
