export interface server {
    app: any
}

export interface User {
    name: string,
    email: string,
    phone: number,
    country: string,
    isDeleted?: boolean
} 