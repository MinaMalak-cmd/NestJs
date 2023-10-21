import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//bootstrap function
async function bootstrap() {
  const port = process.env.port || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => console.log(`your app is running on port ${port}`));
}
bootstrap();
