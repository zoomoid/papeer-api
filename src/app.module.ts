import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReleaseModule } from './release/release.module';
import { MongooseModule } from '@nestjs/mongoose';

const config = {
  hostname: process.env.MONGO_HOST || 'localhost',
  collection: process.env.MONGO_COLLECTION || 'papeer',
};

@Module({
  imports: [
    ReleaseModule,
    MongooseModule.forRoot(`mongodb://${config.hostname}/${config.collection}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
