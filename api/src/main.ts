import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module"
import {ValidationPipe} from "@nestjs/common"
import {ProvideDocsService} from "./infrastructure/docs"

async function bootstrap() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {
        cors: true,
    })

    app.useGlobalPipes(new ValidationPipe())
    app.setGlobalPrefix("api")

    ProvideDocsService(app)

    await app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
}

bootstrap()
