import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

export type PostDocument = HydratedDocument<Post>;
@Schema()
export class Post {
  @Prop({
    type:String,
    required:true,
  })
  title: string;

  @Prop()
  desc: string;

  @Prop({
    type : mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  userId: User

}

export const PostSchema = SchemaFactory.createForClass(Post);