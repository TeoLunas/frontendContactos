export interface IRespuesta<T> {
  exitoso: boolean;
  descripcion: string;
  resultado: T;
}
