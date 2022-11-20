import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
//import ProductsService
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  //add new product post request
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') proDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generateId = this.productsService.insertProduct(
      prodTitle,
      proDesc,
      prodPrice,
    );
    return { id: generateId };
  }

  //get all products
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  //get single product
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  //update product
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }

  //delete product
  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}
