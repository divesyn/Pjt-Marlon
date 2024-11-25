import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naoDisponivel'
})
export class NaoDisponivelPipe implements PipeTransform {

  transform(texto: string): string {
    if (texto == null) {
      return 'Não disponível'
    }
    else {
      return texto
    }
  }

}
