import { Module } from '@nestjs/common';
import { ReleaseService } from './release.service';
import { ReleaseController } from './release.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Release, ReleaseSchema } from './schemas/release.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: ReleaseSchema, name: Release.name }]),
  ],
  controllers: [ReleaseController],
  providers: [ReleaseService],
})
export class ReleaseModule {}
