//TYPES GLOBALES

export type DirectoryType = { //Type para el directorio
    nombre: string
    telefono: string
    correo: string
    url: string
    servicios: string[]
    fotos: string[]
}

export type DirectoyArrayType = DirectoryType & { //Type para el directorio almacenado en el estado global
    id: number
}

export type ViewProps = { //Type para la vista en lista o en recuadro
    directorio: DirectoyArrayType
    edit: boolean
}