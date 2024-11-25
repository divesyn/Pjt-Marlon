import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {

  @HostBinding('style.opacity') Opacidade: string = '';
  @HostBinding('style.transition') Transicao: string = '';

  constructor() { }

  @HostListener('mouseover') aoPassarMouse() {
    this.Opacidade = '0.8';
    this.Transicao = '0.5s';
  }

  @HostListener('mouseout') aoTirarMouse() {
    this.Opacidade = '1'
  }

}
