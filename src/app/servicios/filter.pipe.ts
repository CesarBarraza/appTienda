import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], texto: string): any {
    if(!texto) return value
    return value.filter(producto => producto.Nombre.toLowerCase().includes(texto))
    /*if(rgs.length < 2) return value;
    const result = [];
    for(const list of value){
      if(list.Nombre.toLowerCase().indexOf(rgs.toLowerCase()) > -1){
        result.push(list);
      }
    }
    return result;*/
  }
}
