'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useNew } from "@/hooks/useNew"

type FormComponentProps = {
    id?: number
}

export default function FormComponent({ id }: FormComponentProps) {

    //Llama los estados y manejadores que nececita para la funcionalidad
    const { formData, serviceInput, handleAddServicio, handleDeleteServicio, handleSubmit, handleChange, handleValidation, handleResetFotos } = useNew(id ? { id } : {id: -1})

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 lg:space-y-4 mt-14 lg:mt-20">
            <div className='flex flex-col space-y-1 lg:space-y-2'>
                <label htmlFor='nombre' className='font-dosis lg:text-xl tracking-wide font-medium cursor-pointer w-fit'>Nombre del Negocio</label>
                <input
                    id='nombre' type='text' value={formData.nombre} onChange={handleChange} autoComplete='off' required
                    className='bg-zinc-800 h-8 lg:h-10 p-2 lg:p-3 rounded-sm border border-neutral-950 focus:outline-none focus:ring-1 ring-stone-400'
                />
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col w-[49%] space-y-1 lg:space-y-2'>
                    <label htmlFor='telefono' className='font-dosis lg:text-xl tracking-wide font-medium cursor-pointer w-fit'>Teléfono</label>
                    <input
                        id='telefono' type='number' value={formData.telefono} onChange={handleChange} autoComplete='off' required
                        className='bg-zinc-800 h-8 lg:h-10 p-2 lg:p-3 rounded-sm border border-neutral-950 focus:outline-none focus:ring-1 ring-stone-400'
                    />
                </div>
                <div className='flex flex-col w-[49%] space-y-1 lg:space-y-2'>
                    <label htmlFor='correo' className='font-dosis lg:text-xl tracking-wide font-medium cursor-pointer w-fit'>Correo Electrónico</label>
                    <input
                        id='correo' type='email' value={formData.correo} onChange={handleChange} autoComplete='off' required
                        className='bg-zinc-800 h-8 lg:h-10 p-2 lg:p-3 rounded-sm border border-neutral-950 focus:outline-none focus:ring-1 ring-stone-400'
                    />
                </div>
            </div>
            <div className='flex flex-col space-y-1 lg:space-y-2'>
                <label htmlFor='url' className='font-dosis lg:text-xl tracking-wide font-medium cursor-pointer w-fit'>URL del Sitio Web</label>
                <input
                    id='url' type='url' value={formData.url} onChange={handleChange} autoComplete='off' required
                    className='bg-zinc-800 h-8 lg:h-10 p-2 lg:p-3 rounded-sm border border-neutral-950 focus:outline-none focus:ring-1 ring-stone-400'
                />
            </div>
            <div className='flex flex-col space-y-1 lg:space-y-2'>
                <label htmlFor='servicios' className='font-dosis lg:text-xl tracking-wide font-medium cursor-pointer w-fit'>Servicios Ofrecidos</label>
                <div className='flex h-full'>
                    <input
                        id='servicios' type='text' value={serviceInput} autoComplete='off' onChange={handleChange}
                        className='bg-zinc-800 h-8 lg:h-10 p-2 lg:p-3 rounded-sm w-[90%] lg:w-[95%] border border-neutral-950 focus:ring-1 ring-stone-400'
                    />
                    <button type='button' onClick={handleAddServicio} className='w-[10%] lg:w-[5%] bg-neutral-950 border border-neutral-950 rounded-e-md hover:bg-gradient-to-br from-neutral-900 '>
                        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='flex justify-center items-center h-full w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 lg:size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </motion.div>
                    </button>
                </div>
                {formData.servicios.map((servicio, index) => (
                    <div key={index} className='flex h-full'>
                        <input
                            type='text' value={servicio} onChange={handleChange} disabled
                            className='bg-stone-900 h-8 lg:h-10 p-2 lg:p-3 rounded-sm w-[90%] lg:w-[95%] border border-neutral-950 cursor-not-allowed text-gray-400'
                        />
                        <button type='button' onClick={() => handleDeleteServicio(servicio)} className='w-[10%] lg:w-[5%] bg-neutral-950 border border-neutral-950 rounded-e-md hover:bg-gradient-to-br from-neutral-900 '>
                            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='flex justify-center items-center h-full w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 lg:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </motion.div>
                        </button>
                    </div>
                ))}
            </div>
            <div className='flex flex-col space-y-1 lg:space-y-2'>
                <label htmlFor='fotos' className='font-dosis lg:text-xl tracking-wide font-medium cursor-pointer w-fit'>Fotos del Negocio</label>
                <input
                    id='fotos' type='file' accept='.png, .jpg' multiple onChange={handleChange}
                    className='hidden'
                />
                <label onClick={handleResetFotos} htmlFor='fotos' className='flex justify-center items-center bg-zinc-800 hover:bg-neutral-800 h-48 lg:h-64 p-2 lg:p-3 rounded-sm cursor-pointer border border-neutral-950 relative'>
                    {formData.fotos.length > 0 &&
                        <>
                            <div className={`flex flex-row ${formData.fotos.length < 3 && 'lg:justify-center'} w-[90%] h-[90%] space-x-1 opacity-25 overflow-x-auto `}>
                                {formData.fotos.map((foto, index) => (
                                    <div
                                        key={index} className='bg-stone-800 h-[90%] w-[20rem] min-w-[20rem] rounded-md'>
                                        <Image className='h-full w-full object-cover rounded-md' src={foto} alt={`foto-${index}`} width={100} height={100} />
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                    <motion.svg
                        animate={{ translateY: [0, -5, -10, -15, -10, -5, 0] }}
                        transition={{
                            type: "keyframes",
                            stiffness: 100,
                            damping: 10,
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-20 lg:size-28 absolute ${formData.fotos.length > 0 && 'transition-opacity opacity-60'}`}>
                        <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                    </motion.svg>
                </label>
            </div>
            {id ?
                <div className='mx-auto w-[90%]'>
                    <motion.input whileHover={{ scale: handleValidation ? 1.02 : 1 }} whileTap={{ scale: handleValidation ? 0.95 : 1 }} type='submit' value={'editar'} disabled={!handleValidation}
                        className='uppercase w-full h-full cursor-pointer bg-stone-700 py-3 mt-7 rounded-sm text-xl lg:text-2xl font-sometype font-bold tracking-wide disabled:bg-stone-800 disabled:text-zinc-700 disabled:cursor-default'
                    />
                </div>
                :
                <div className='mx-auto w-[90%]'>
                    <motion.input whileHover={{ scale: handleValidation ? 1.02 : 1 }} whileTap={{ scale: handleValidation ? 0.95 : 1 }} type='submit' value={'agregar'} disabled={!handleValidation}
                        className='uppercase w-full h-full cursor-pointer bg-stone-700 py-3 mt-7 rounded-sm text-xl lg:text-2xl font-sometype font-bold tracking-wide disabled:bg-stone-800 disabled:text-zinc-700 disabled:cursor-default'
                    />
                </div>
            }

        </form>
    )
}
