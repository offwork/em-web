import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: string;

  @Prop()
  birth_date: Date;

  @Prop()
  office: string;

  @Prop()
  thumb: string;

  @Prop()
  photo: string;

  @Prop()
  tags: Array<Record<string, unknown>>;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
