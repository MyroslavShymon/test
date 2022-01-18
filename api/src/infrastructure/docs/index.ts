import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function ProvideDocsService(app) {
  const config = new DocumentBuilder()
    .setTitle('Test task')
    .setDescription('Simple store test task documentation')
    .setVersion('1.0.0')
    .addTag('Store')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)
}
