import { Module } from "@nestjs/common";
import { PostResolver, ExtendUserResolver } from "./PostResolver";

@Module({
    imports: [],
    providers: [PostResolver, ExtendUserResolver],
})
export class PostModule{ };
