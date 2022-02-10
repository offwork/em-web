import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.schema';
import { EmployeeDto } from './entities/employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  async findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() body: EmployeeDto): Promise<Employee> {
    return this.employeeService.updateOne(id, body);
  }

  @Post()
  async createNewOne(@Body() body: EmployeeDto): Promise<Employee> {
    return this.employeeService.createNewOne(body);
  }
}
