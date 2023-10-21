import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {} // its type must be from of its service type

  @Get() // this is called decorator, any decoator applied on what's next only
  getPosts(): string {
    return this.postService.getPosts();
  }
}
