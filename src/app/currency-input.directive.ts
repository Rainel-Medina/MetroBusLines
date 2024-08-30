import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appCurrencyInput]'
})
export class CurrencyInputDirective {
  private regex: RegExp = new RegExp(/[^0-9$]/g);

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement;
    let value = input.value.replace(this.regex, '');  // Elimina caracteres no deseados
    if (value) {
      // Formatea el valor con el símbolo $
      value = `$${parseFloat(value).toFixed(2)}`;
    }
    input.value = value;
  }
}
