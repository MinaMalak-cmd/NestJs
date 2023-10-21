import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//bootstrap function
async function bootstrap() {
  const port = process.env.port || 5000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // remove unneeded properties sent from client-side
  }));
  await app.listen(port, () => console.log(`your app is running on port ${port}`));
}
bootstrap();
