import { useDirectory } from "@/hooks/useDirectory"
import { DirectoyActions } from "@/redurcers/directoy-reducer"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"

//Lo que se le tiene que pasar a este componente para ser reutilizado
type DeleteModalProps = {
    mensaje: string,
    isModalOpen: boolean
    setModalOpen: Dispatch<SetStateAction<boolean>>
    toDispatch: DirectoyActions
}

//Componente de un modal que permite mostrar un mensaje de acuerdo a los paramentros pasados
export default function DeleteModal({ mensaje, isModalOpen, setModalOpen, toDispatch }: DeleteModalProps) {

    const { dispatch } = useDirectory()

    const handleYes = () => {
        dispatch(toDispatch)
        setModalOpen(false)
    }

    return (
        <div className={`${isModalOpen ? 'flex' : 'hidden'} justify-center items-center w-full h-full absolute top-0 right-0 z-50`}>
            <div className='bg-black opacity-70 w-full h-full ' />
            <div className='flex flex-col bg-zinc-900 w-[90%] lg:w-[40%] h-[30%] opacity-100 absolute rounded-md border border-zinc-500'>
                <div className='flex justify-end items-center bg-zinc-950 border-b border-zinc-500 w-full h-[12%] rounded-t-md'>
                    <button onClick={() => setModalOpen(false)} className='bg-red-600 hover:bg-red-800 cursor-pointer border-l border-zinc-500 h-full w-[18%] md:w-[10%] rounded-tr-md'>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className='h-full w-full flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </motion.div>
                    </button>
                </div>
                <div className='flex flex-col h-full w-[90%] lg:w-[80%] self-center p-3'>
                    <h1 className='uppercase text-center text-base lg:text-2xl font-dosis tracking-widest font-semibold mt-auto'>{mensaje}</h1>
                    <div className='space-x-2 sm:space-x-4 self-center mt-auto my-auto'>
                        <motion.button
                            onClick={handleYes}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='py-1 lg:py-2 px-10 lg:px-20 bg-red-600 hover:bg-red-800 text-lg lg:text-2xl font-sometype font-bold rounded-sm border border-zinc-500'>SI</motion.button>
                        <motion.button
                            onClick={() => setModalOpen(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='py-1 lg:py-2 px-10 lg:px-20 bg-blue-600 hover:bg-blue-800 text-lg lg:text-2xl font-sometype font-bold rounded-sm border border-zinc-500'>NO</motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}
