import FormComponent from '@/components/FormComponent'
import type { Metadata } from 'next'

//Pagina para nuevo directorio
export const metadata: Metadata = {
  title: 'Añadir',
}

export default function AddNew() {

  return (
    <>
      <h1 className='uppercase font-sometype font-bold text-lg lg:text-xl tracking-wide'>Nuevo Directorio</h1>
      <FormComponent />
    </>
  )
}
