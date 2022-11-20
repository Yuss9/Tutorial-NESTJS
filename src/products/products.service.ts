import { Injectable } from '@nestjs/common';
//import product
import { Product } from './product.model';
@Injectable()
export class ProductsService {
  products: Product[] = [];

  getProducts() {
    return [...this.products];
  }

  insertProduct(title, desc, price) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getSingleProduct(prodId: string) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new Error('Could not find product.');
    }
    return { ...product };
  }

  updateProduct(prodId: string, title: string, desc: string, price: number) {
    //find product with prodId
    const [product, index] = this.findProduct(prodId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new Error('Could not find product.');
    }
    return [product, productIndex];
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }
}
