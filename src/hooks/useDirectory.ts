import { useContext } from "react";
import { DirectoryContext } from "@/context/DirectoyContex";

//CUSTOM HOOK PARA EL CONTEXT

export const useDirectory = () => {
    //CONTEXT
    const context = useContext(DirectoryContext)

    //Validacion
    if (!context) {
        throw new Error('useDirectory must be used within a DirectoryProvider')
    }

    return context
}