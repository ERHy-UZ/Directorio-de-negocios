import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { directoryReducer, DirectoyActions, DirectoyState, initialState } from "@/redurcers/directoy-reducer"

//BOILERPLATE DEL CONTEXT

//Types
type DirectoryContextProps = {
    state: DirectoyState
    dispatch: Dispatch<DirectoyActions>
}
type DirectoryProviderProps = {
    children: ReactNode
}

//Creación del Context llamado DirectoryContext
export const DirectoryContext = createContext<DirectoryContextProps>({} as DirectoryContextProps)

//El Provider para envolver todos los componentes donde se requiera el estado global
export const DirectoryProvider = ({ children }: DirectoryProviderProps) => {

//Reducer
    const [state, dispatch] = useReducer(directoryReducer, initialState)

//Envolver los componentes hijos de este Provider
    return (
        <DirectoryContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </DirectoryContext.Provider>
    )
}