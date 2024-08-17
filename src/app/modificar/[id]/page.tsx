import FormComponent from '@/components/FormComponent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Editar',
}

//Pagina para editar
export default function EditID({ params }: { params: { id: number } }) {

    const NumetoDir = +params.id + 1

    return (
        <>
            <header className='flex items-center h-8 bg-zinc-950'>
                <h1 className='w-[70%] lg:w-[50%] mx-2 uppercase font-sometype font-bold text-sm lg:text-xl tracking-wide'>Modificar Directorio Numero {NumetoDir}</h1>
                <div className='flex justify-end h-full w-[50%] mx-2'>
                </div>
            </header>
            <FormComponent id={params.id} />
        </>
    )
}
