import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective {

  @HostBinding('style.background') corDeFundo: string = '';
  @HostBinding('style.border') corDeBorda: string = '';
  @HostBinding('style.transition') Transicao: string = '';

  constructor() { }

  @HostListener('mouseover') aoPassarMouse() {
    this.corDeBorda = '1px solid black';
    this.Transicao = '0.5s';
  }

  @HostListener('mouseout') aoTirarMouse() {
    this.corDeBorda = '1px solid rgb(210, 211, 212)'
  }
}
