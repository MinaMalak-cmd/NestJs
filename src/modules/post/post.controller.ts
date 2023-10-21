import { Controller, Get, Post, Request, Response } from '@nestjs/common';
import { PostService } from './post.service';
import { Request as REQUEST, Response as RESPONSE } from 'express';

@Controller({ path: 'post' })
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get() // this is called decorator, any decoator applied on what's next only
  getPosts(@Response() response: RESPONSE): Promise<RESPONSE> {
    return this.postService.getPosts(response);
  }

  @Post()
  addNewPost(
    @Request() request: REQUEST,
    @Response() response: RESPONSE,
  ): Promise<RESPONSE> {
    return this.postService.addNewPost(request, response);
  }
}
