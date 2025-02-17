import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat', // Nombre del Pipe
  standalone: true // Marca el Pipe como standalone
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return ''; // Si no hay valor, retorna una cadena vacía
    }

    // Asegúrate de que el valor sea una cadena
    const phoneNumber = value.toString();

    // Agrega el prefijo +569 si no está presente
    const formattedNumber = phoneNumber.startsWith('569') ? `+${phoneNumber}` : `+569 ${phoneNumber}`;

    // Agrega un espacio cada 4 caracteres
    return formattedNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
  }
}
