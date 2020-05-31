import { Module } from "@nestjs/common";
import { GraphQLFederationModule } from "@nestjs/graphql";
import { PostModule } from "./Post/PostModule";

@Module({
    imports: [
        GraphQLFederationModule.forRoot({
            path: "/post-service/graphql",
            autoSchemaFile: "src/schema.graphql",
        }),
        PostModule,
    ],
})
export class AppModule { }
