import { Resolver, Query } from "@nestjs/graphql";
import { Post } from "./models/Post";
import { plainToClass } from "class-transformer";

const posts: Post[] = [
    { id: "1", text: "Hello world" },
    { id: "2", text: "I am a post" },
];

@Resolver(Post)
export class PostResolver {
    @Query(_ => Post, { nullable: true })
    async posts(): Promise<Post[] | null> {
        return plainToClass(Post, posts);
    }
}
