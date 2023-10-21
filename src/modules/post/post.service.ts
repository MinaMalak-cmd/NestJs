import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { Post } from '../../DB/Schemas/post.schema';
import { DBMethods } from '../../DB/DBMethods';
@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private _postModel: Model<Post>,
    private _dbMethod: DBMethods,
  ) { }

  async getPosts(response:Response): Promise<Response> {
    const posts = await this._dbMethod.findAllDocuments(this._postModel);
    return response.status(200).json({ message : "Posts retrieved successfully", posts});
  }

  async addNewPost(request:Request, response:Response) : Promise<Response> {
    const { title, desc, userId } = request.body;
    const post = await this._dbMethod.createDocumnet(this._postModel,{ title, desc, userId });
    return response.status(201).json({ message : "User created successfully", post});
}
}
