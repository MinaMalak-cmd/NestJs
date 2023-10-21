import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Schemas/user.schema';
import { PostSchema, Post } from './Schemas/post.schema';

export const models = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
  { name: Post.name, schema: PostSchema },
]);
