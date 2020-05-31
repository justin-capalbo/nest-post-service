import { Module } from "@nestjs/common";
import { PostResolver } from "./PostResolver";

@Module({
    imports: [],
    providers: [PostResolver],
})
export class PostModule{ };
