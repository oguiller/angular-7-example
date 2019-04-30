import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductFormGroup } from './form.model';
import { Product } from './product.model';
import { Model } from './repository.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
