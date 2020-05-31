import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field(_ => ID) 
    id!: string;

    @Field(_ => ID) 
    userId!: string;

    @Field()
    text!: string;
}
