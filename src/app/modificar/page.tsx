import ButtonMotion from "@/components/ButtonMotion"
import dynamic from "next/dynamic"
import type { Metadata } from 'next'

//Pagina para modificar
export const metadata: Metadata = {
  title: 'Modificar',
}

export default function Modificar() {

  const NoSSR = dynamic(() => import('@/components/DisplayDirectoy'), { ssr: false })

  return (
    <>
      <header className='flex items-center h-8 bg-zinc-950'>
        <h1 className='w-[70%] lg:w-[50%] mx-2 uppercase font-sometype font-bold text-sm lg:text-xl tracking-wide'>Modificar Directorios</h1>
        <div className='flex justify-end h-full w-[50%] mx-2'>
          <ButtonMotion />
        </div>
      </header>
      <section className='mt-8 w-full'>
        <NoSSR edit={true}/>
      </section>
    </>
  )
}
