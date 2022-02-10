import { Controller, Get } from '@nestjs/common';
import { OfficesService } from './offices.service';

@Controller('offices')
export class OfficesController {
  constructor(private readonly officeService: OfficesService) {}

  @Get()
  async findAll() {
    return this.officeService.findAll();
  }
}
