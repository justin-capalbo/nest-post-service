import { Resolver, Query, ResolveField, Parent } from "@nestjs/graphql";
import { Post } from "./models/Post";
import { plainToClass } from "class-transformer";
import { User } from "./models/User";

const data: Post[] = [
    { id: "1", userId: "1", text: "Hello world" },
    { id: "2", userId: "2", text: "I am a post" },
    { id: "3", userId: "1", text: "Yet another post" },
];

@Resolver(Post)
export class PostResolver {
    @Query(_ => [Post], { nullable: true })
    async posts(): Promise<Post[] | null> {
        return plainToClass(Post, data);
    }
}

@Resolver(User)
export class ExtendUserResolver {
    @ResolveField('posts', _ => [Post])
    async posts(
        @Parent() { id }: User
    ): Promise<Post[] | null> {
        const userPosts = data.filter((post) => post.userId === id);
        return plainToClass(Post, userPosts);
    }
}