import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OfficeDocument = Office & Document;

@Schema()
export class Office {
  @Prop()
  location: string;
}

export const OfficeSchema = SchemaFactory.createForClass(Office);
