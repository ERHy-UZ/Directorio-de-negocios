//TYPES GLOBALES

export type DirectoryType = { // <-- Type para el directorio
    nombre: string
    telefono: string
    correo: string
    url: string
    servicios: string[]
    fotos: string[]
}

export type DirectoyArrayType = DirectoryType & {// <-- Type para el directorio almacenado en el estado global
    id: number
}

export type ViewProps = {
    directorio: DirectoyArrayType
    edit: boolean
}