import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // global prefix
    app.setGlobalPrefix('cms/user');
    await app.listen(3000);
}
bootstrap();