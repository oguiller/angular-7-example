import { Component } from '@angular/core';
import { Product } from './product.model';
import { Model } from './repository.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {
  selectedProduct: string;

  newProduct: Product = new Product();

  model: Model = new Model();

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }
}
