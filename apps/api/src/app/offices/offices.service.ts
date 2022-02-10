import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Office, OfficeDocument } from './entities/office.schema';

@Injectable()
export class OfficesService {
  constructor(@InjectModel(Office.name) private readonly office: Model<OfficeDocument>) {}

  async findAll(): Promise<Office[]> {
    return this.office.find().exec();
  }
}
