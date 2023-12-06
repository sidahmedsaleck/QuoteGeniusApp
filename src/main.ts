import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT || 3000, () =>
    console.log(`Server running on port ${process.env.APP_PORT}`),
  );
}
bootstrap();
