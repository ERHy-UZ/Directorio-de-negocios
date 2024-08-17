import type { DirectoyArrayType } from "@/types"

//BOILERPLATE DEL REDUCER

//Acciones del Reducer
export type DirectoyActions =
    { type: 'add-directory', payload: DirectoyArrayType } |
    { type: 'delete-directoy', payload: { id: number } } |
    { type: 'delete-all'} |
    { type: 'set-list' } |
    { type: 'set-box' }


//Types
export type DirectoyState = {
    directorios: DirectoyArrayType[]
    list: boolean
    idActual: number
}

//sessionStorage
const sessionStorageDirectorios = (): DirectoyArrayType[] => {
    if (typeof window !== 'undefined') {
        const sessionDirectories = sessionStorage.getItem('directoryArray')
        return sessionDirectories ? JSON.parse(sessionDirectories) : []
    }
    return []
}

const sessionStorageList = (): boolean => {
    if (typeof window !== 'undefined') {
        const sessionList = sessionStorage.getItem('listStorage')
        return sessionList ? JSON.parse(sessionList) : true
    }
    return true
}

const sessionStorageID = (): number => {
    if (typeof window !== 'undefined') {
        const sessionID = sessionStorage.getItem('idStorage')
        return sessionID ? JSON.parse(sessionID) : 0
    }
    return 0
}

//Estado inicial
export const initialState: DirectoyState = {
    directorios: sessionStorageDirectorios(),
    list: sessionStorageList(),
    idActual: sessionStorageID()
}

//Reducer
export const directoryReducer = (
    state: DirectoyState = initialState,
    action: DirectoyActions
) => {

//Funcionalidades por acción
    if (action.type === 'add-directory') { //Accion que añade un nuevo directorio o modifica uno existente
        let newDirectory: DirectoyArrayType[]
        let newID: number

        if (action.payload.id === -1) {
            newDirectory = [...state.directorios, { ...action.payload, 'id': state.idActual }]
            newID = state.idActual + 1
        } else {
            newDirectory = state.directorios.map(directorio => directorio.id === action.payload.id ? action.payload : directorio)
            newID = state.idActual
        }

        return {
            ...state,
            directorios: newDirectory,
            idActual: newID
        }
    }
    if (action.type === 'delete-directoy') { //Accion que elimina un solo directorio
        let newDirectory: DirectoyArrayType[]

        newDirectory = state.directorios.filter(directorio => directorio.id !== action.payload.id )

        return {
            ...state,
            directorios: newDirectory
        }
    }
    if (action.type === 'delete-all') { //Accion que elimina todos los directorios

        return {
            ...state,
            directorios: [],
            idActual: 0 
        }
    }
    if (action.type === 'set-list') { //Accion que cambia la vista a lista

        return {
            ...state,
            list: true
        }
    }
    if (action.type === 'set-box') {//Accion que cambia la vista a cuadricula

        return {
            ...state,
            list: false
        }
    }

    return state
}