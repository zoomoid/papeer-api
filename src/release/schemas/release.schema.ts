import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReleaseDocument = Release & Document;

@Schema()
export class Release {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  branch: string;

  @Prop()
  commit: string;

  @Prop()
  url: string;

  @Prop()
  author: string;
}

export const ReleaseSchema = SchemaFactory.createForClass(Release);
