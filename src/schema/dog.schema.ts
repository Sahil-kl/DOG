import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type DogSchema = Dog & Document;

@Schema()
export class Dog{
    @Prop()
    name: string

    @Prop()
    breed: string

    @Prop()
    age: string

    @Prop()
    color: string

    @Prop()
    nickName: string

    @Prop({type: Date})
    createdAt: Date

    @Prop({type: Date})
    updatedAt: Date

    @Prop({type: Date})
    deletedAt: Date
}
export const DogSchema = SchemaFactory.createForClass(Dog);
