import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // DTO에 정의되지 않은 컬럼을 방지하는 파이프라인
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true

    })
  )
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
