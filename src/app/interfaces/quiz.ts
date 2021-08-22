export interface Respuesta {
    id: number;
    respuesta: string;
    ayuda: string;
    otro: string;
}

export interface Quiz {
    id: number;
    pregunta: string;
    icono: string;
    descripcion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    tipo_respuestas: number;
    respuestas: Respuesta[];
}