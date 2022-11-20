//import Module
import { Module } from '@nestjs/common';
//import ProducstController
import { ProductsController } from './products.controller';
//import ProductsService
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModule {}
