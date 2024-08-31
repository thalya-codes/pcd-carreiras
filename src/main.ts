import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Documentação PCD Carreiras API')
    .setDescription(
      'API para cadastro de vagas e avaliação de acessibilidade e inclusão por PCDs, promovendo a conexão entre PCDs e oportunidades de emprego.',
    )
    .setVersion('1.0')
    .addTag('company')
    .addTag('feedback')
    .addTag('job-vacancy')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(3000);
}
bootstrap();
