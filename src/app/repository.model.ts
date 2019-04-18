import { SimpleDataSource } from './datasource.model';
import { Product } from './product.model';

export class Model {

  private dataSource: SimpleDataSource;
  private products: Product[];
  private locator = (p: Product, id: number) => p.id == id;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getData().forEach(p => this.products.push(p));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      let index = this.products
        .findIndex(p => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

  /*
    The swapProduct method removes the first object from the array and adds a new object that has the same values for
    the id, name, category, and price properties. This is an example of data values being represented by a new object.
   */
  swapProduct() {
    let p = this.products.shift();
    this.products.push(new Product(p.id, p.name, p.category, p.price));
  }

  /*
     The method has to define two parameters: the position of the object in the data source and the data object.
     The result of the method uniquely identifies an object, and two objects are considered to be equal if
     they produce the same result.
     Two Product objects will be considered equal if they have the same id value.
     */
  getKey(index: number, product: Product) {
    return product.id;
  }

}
