import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';


/*
 We can try this in the browser console:
   model.products.shift() -- This statement calls the shift method on the array of Product object.

   appRef.tick() -- The tick method starts the Angular change detection process, where Angular looks at the data in the
 application and the expressions in the data binding and processes any changes. The data bindings in the template use
 specific array indexes to display data, and now that an object has been removed from the model, the bindings will be
 updated to display new values
 */
@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
    /*
    These statements define variables in the global namespace and assign the ApplicationRef and Model objects to them.
    It is good practice to keep the global namespace as clear as possible, but exposing these objects allows them
    to be manipulated through the browser’s JavaScript console, which is important for this example.
     */
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  /*
  When Angular performs the bootstrapping process, it creates an ApplicationRef object to represent the application.
  Without going into detail now, declaring a constructor argument like this tells Angular that the component wants to
  receive the ApplicationRef object when a new instance is created.
   */
}
