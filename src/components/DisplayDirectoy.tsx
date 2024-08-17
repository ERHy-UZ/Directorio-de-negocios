'use client'

import { useDirectory } from "@/hooks/useDirectory"
import ListView from "./ListView"
import GridView from "./GridView"

type DisplayDirectoyProps = {
    edit: boolean
}

//Componente que maneja la vista tanto para el Directorio como para Modificar
export default function DisplayDirectoy({ edit }: DisplayDirectoyProps) {

    const { state } = useDirectory()

    return (
        <div className={`${state.list === false ? 'grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5' : 'space-y-2'} w-full ${state.directorios.length === 0 && 'grid-cols-1 xl:grid-cols-1'} `}>
            {state.directorios.length === 0 &&
                <div className='w-full flex justify-center items-center mt-36'>
                    <h1 className='uppercase text-6xl font-dosis text-stone-500'>No hay datos</h1>
                </div>
            }
            {state.directorios.map(directorio => (
                state.list ?
                    <ListView key={directorio.id} directorio={directorio} edit={edit} />
                    :
                    <GridView key={directorio.id} directorio={directorio} edit={edit} />
            ))}
        </div>
    )
}
