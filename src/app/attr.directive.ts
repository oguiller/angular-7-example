import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pa-attr]'
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {
    console.log('Constructor');
  }

  @Input('pa-attr')
  bgClass: string;

  ngOnInit() {
    console.log('On init');
    this.element.nativeElement.classList.add(this.bgClass || 'bg-success',
      'text-white');
  }
}
