import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent],
  bootstrap: [ProductComponent]
})

/**
 * Angular provides another approach, known as model-based forms, in which the details of the form and its validation
 * are defined in code rather in a template. This approach scales up better, but it requires some up-front effort,
 * and the results are not as natural as defining everything in the template. In the sections that follow, I set up and
 * apply a model that describes the form and the validation it requires.
 */
export class AppModule {
}
