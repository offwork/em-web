import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TagsModule } from './tags/tags.module';
import { OfficesModule } from './offices/offices.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:NqQBCS453vkk5sm@em-web-cluster.qpro2.mongodb.net/em_db?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ),
    EmployeesModule,
    TagsModule,
    OfficesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
