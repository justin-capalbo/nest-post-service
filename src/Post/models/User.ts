import { ObjectType, Field, ID, Directive } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
@Directive("@extends")
export class User {
    @Field(_ => ID) 
    @Directive("@external")
    id!: string;
}