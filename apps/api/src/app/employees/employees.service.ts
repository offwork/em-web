import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Employee, EmployeeDocument } from './entities/employee.schema';
import { EmployeeDto } from './entities/employee.dto';


@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private readonly employee: Model<EmployeeDocument>) {}

  async findAll(): Promise<Employee[]> {
    return this.employee.find().exec();
  }

  async findOne(id: string): Promise<Employee> {
    return this.employee.findOne({ _id: id }).exec();
  }

  async updateOne(id: string, body: EmployeeDto): Promise<Employee> {
    const employee =  await this.employee
      .findOneAndReplace({ _id: id}, body, { new: true })
    return employee;
  }

  async createNewOne(body: EmployeeDto): Promise<Employee> {
    const employee =  await this.employee.create(body);
    return employee;
  }
}
