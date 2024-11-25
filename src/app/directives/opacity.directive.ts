import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {

  @HostBinding('style.opacity') Opacidade: string = '';

  constructor() { }

  @HostListener('mouseover') aoPassarMouse() {
    this.Opacidade = '0.8';
  }

  @HostListener('mouseout') aoTirarMouse() {
    this.Opacidade = '1'
  }

}
