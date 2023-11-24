export interface User {
    id: number,
    nombre: string,
    contrasena: string,
    email: string,
    estado: number
}

export interface TokenAndIdResponse {
    token: string,
    user_id: number
}

export interface UserAndToken {
    user: User,
    token: string
}