import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field(_ => ID) 
    id!: string;

    @Field()
    text!: string;
}
