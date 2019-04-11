import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {
  model: Model = new Model();

  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  // The getClassMap method returns an object with properties whose values are one or more class names,
  // with values based on the property values of the Product object whose key is specified as the method argument.

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }

  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string= "30";

  /*
  CAUTION: Do not try to use the standard property binding to target the style property to set multiple style values.
  The object returned by the style property of the JavaScript object that represents the host element in the DOM is read-only.
  Some browsers will ignore this and allow changes to be made, but the results are unpredictable and cannot be relied on.
  If you want to set multiple style properties, then create a binding for each of them or use the ngStyle directive.
   */
}
