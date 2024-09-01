import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcCredit',
  standalone: true
})
export class CalcCreditPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    const valueStr = value.toString();

    const cleaned = valueStr.replace(/\D/g, '');

    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 - ');

    return formatted;
  }

}
