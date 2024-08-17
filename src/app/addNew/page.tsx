import FormComponent from '@/components/FormComponent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agregar',
}

export default function AddNew() {

  return (
    <>
      <h1 className='uppercase font-sometype font-bold text-lg lg:text-xl tracking-wide'>Nuevo Directorio</h1>
      <FormComponent />
    </>
  )
}
