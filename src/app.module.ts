import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/Auth/auth.module';
import { PostModule } from './modules/Post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/app-DB'), AuthModule, PostModule], 
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}
