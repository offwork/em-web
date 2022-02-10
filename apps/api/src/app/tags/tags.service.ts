import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Tag, TagDocument } from './entities/tag.schema';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag.name) private readonly tag: Model<TagDocument>) {}

  async findAll(): Promise<Tag[]> {
    return this.tag.find().exec();
  }
}
