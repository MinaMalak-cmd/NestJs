import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { models } from "../../DB/models.generations";
import { DBMethods } from "../../DB/DBMethods";

@Module({
    imports: [models], 
    controllers: [PostController], 
    providers: [PostService, DBMethods], 
})
export class PostModule {}
