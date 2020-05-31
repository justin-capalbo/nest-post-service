import { NestFactory } from "@nestjs/core";
import { ValidationPipe, Logger } from "@nestjs/common";
import { AppModule } from "./AppModule";

async function main(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.listen(3000);

    const baseUrl = (await app.getUrl()).replace("[::1]", "localhost");

    Logger.log(`Service listening at: ${baseUrl}/post-service/graphql`, "NestApplication");
}
main();
