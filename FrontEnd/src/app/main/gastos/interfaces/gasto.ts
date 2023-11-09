export interface Gasto {
    id: number,
    cantidad: number,
    fecha: string,
    descripcion: string,
    categoria_id: number,
    subcategoria_id: number,
    usuario_id: number
}