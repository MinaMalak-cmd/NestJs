import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type:String,
    required:true,
    minlength:2,
    maxlength:100
  })
  name: string;

  @Prop({
    type: String, 
    required: true
  })
  email: string;

  @Prop({
    type: String,
    required: true
  })
  password: string;

  @Prop()
  age : number

  @Prop({
    default:'male',
    enum:['male', 'female']
  })
  gender: string
}

export const UserSchema = SchemaFactory.createForClass(User);