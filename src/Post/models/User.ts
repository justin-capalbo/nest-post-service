import { ObjectType, Field, ID, Directive } from "@nestjs/graphql";

@ObjectType()
@Directive("@extends")
@Directive('@key(fields: "id")')
export class User {
    @Field(_ => ID) 
    @Directive("@external")
    id!: string;
}