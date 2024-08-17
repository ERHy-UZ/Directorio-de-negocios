import { ViewProps } from "@/types"
import { useState } from "react"
import { motion } from 'framer-motion'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import DeleteModal from "./DeleteModal"

export default function ListView({ directorio, edit }: ViewProps) {

    const [slide, setSlide] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false)
    const router = useRouter()

    const handleLeft = () => {
        if (slide === 0) {
            setSlide(directorio.fotos.length - 1)
        } else {
            setSlide(slide - 1)
        }
    }

    const handleRight = () => {
        if (slide === directorio.fotos.length - 1) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }

    return (
        <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{
                ease: 'backOut',
                duration: 0.3
            }}
            className='flex h-[7rem] lg:h-[15rem] w-full rounded-md shadow-lg bg-zinc-800 border border-neutral-950'>
            <div className='flex items-center justify-center w-[23%] rounded-l-md'>
                <div className='flex h-[90%] w-[90%] rounded-md relative overflow-hidden'>
                    {directorio.fotos.map((foto, index) => (
                        <motion.div
                            key={index}
                            animate={{ translateX: `-${100 * slide}%` }}
                            transition={{
                                ease: "easeInOut"
                            }}
                            className='w-full h-full shrink-0 grow-0'>
                            <Image className='w-full h-full object-cover rounded-md pointer-events-none' src={foto} alt={`imagen-${index}`} width={20} height={20} />
                        </motion.div>
                    ))}
                    {
                        directorio.fotos.length > 1 &&
                        <>
                            <motion.svg
                                whileHover={{ scale: 1.3 }}
                                onClick={handleRight}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="size-5 lg:size-7 absolute right-0 self-center mr-1 mix-blend-difference cursor-pointer">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                            </motion.svg>
                            <motion.svg
                                whileHover={{ scale: 1.3 }}
                                onClick={handleLeft}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="size-5 lg:size-7 absolute left-0 self-center ml-1 mix-blend-difference cursor-pointer">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                            </motion.svg>
                        </>
                    }
                </div>
            </div>
            <div className='w-[77%] h-full pt-3 pr-3'>
                <div className='flex justify-between items-center w-full bg-stone-700 px-2'>
                    <h3 className='font-dosis font-medium uppercase tracking-wider text-base lg:text-2xl my-1 overflow-hidden w-[65%]'>{directorio.nombre}</h3>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex justify-center rounded-sm items-center uppercase font-bold font-dosis tracking-widest w-[30%] h-full p-1 bg-slate-900 hover:bg-slate-800 w-[30%]shadow-inner shadow-slate-700 text-sm lg:text-base' href={directorio.url} >Sitio Web</motion.a>
                </div>
                <div className='relative mt-1 lg:mt-3 h-[72%] font-sometype italic'>
                    <div className='flex space-x-7 lg:space-x-14 overflow-hidden'>
                        <div className='flex items-center font-mono'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 lg:size-5">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                            <p className='text-sm lg:text-lg ml-1 lg:ml-2 underline tracking-wider'>{directorio.telefono}</p>
                        </div>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 lg:size-5">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <p className='text-sm lg:text-lg ml-1 lg:ml-2 underline tracking-wider'>{directorio.correo}</p>
                        </div>
                    </div>
                    <div className='flex justify-between absolute lg:bottom-0 w-full bg-stone-900'>
                        <div className='flex overflow-hidden'>
                            {directorio.servicios.map((servicio, index) => (
                                <p key={index} className='uppercase bg-stone-900 border border-black py-1 px-1 lg:px-2 font-dosis tracking-widest font-semibold text-sm lg:text-base'>{servicio}</p>
                            ))}
                        </div>
                        {edit === true &&
                            <div className='w-[10%]'>
                                <button onClick={() => router.push(`/modificar/${directorio.id}`)} type='button' className='w-[50%] h-full bg-stone-900 border border-stone-950 rounded-sm hover:bg-gradient-to-br from-stone-800 text-blue-500'>
                                    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='flex justify-center items-center h-full w-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-6">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                        </svg>
                                    </motion.div>
                                </button>
                                <button onClick={() => setModalOpen(true)} type='button' className='w-[50%] h-full bg-stone-900 border border-stone-950 rounded-sm hover:bg-gradient-to-br from-stone-800 text-red-500'>
                                    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='flex justify-center items-center h-full w-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-6">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                        </svg>
                                    </motion.div>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <DeleteModal mensaje='¿Seguro que desea eliminar este directorio?' isModalOpen={isModalOpen} setModalOpen={setModalOpen} toDispatch={{ type: 'delete-directoy', payload: { id: directorio.id } }} />
        </motion.div >
    )
}
