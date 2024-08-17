'use client'

import { useDirectory } from '@/hooks/useDirectory'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

// Botones para cambiar entre lista y cuadricula
export default function ButtonMotion() {

    const { state, dispatch } = useDirectory()

    useEffect(() => {
        sessionStorage.setItem('listStorage', JSON.stringify(state.list));
    }, [state.list])

    useEffect(() => {
        sessionStorage.setItem('idStorage', JSON.stringify(state.idActual));
    }, [state.idActual])

    return (
        <>
            <button onClick={() => dispatch({ type: 'set-list' })} type='button' className='w-10 lg:w-[8%] h-full bg-neutral-950 border border-neutral-950 rounded-sm hover:bg-gradient-to-br from-neutral-900'>
                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='flex justify-center items-center h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </motion.div>
            </button>
            <button onClick={() => dispatch({ type: 'set-box' })} type='button' className='w-10 lg:w-[8%] h-full bg-neutral-950 border border-neutral-950 rounded-sm hover:bg-gradient-to-br from-neutral-900 '>
                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='flex justify-center items-center h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 lg:size-6">
                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>
                </motion.div>
            </button>
        </>
    )
}
