import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { DirectoyArrayType} from "@/types"
import { useDirectory } from "@/hooks/useDirectory"
import { DirectoyState } from "@/redurcers/directoy-reducer"
import { useRouter } from 'next/navigation'

type useNewProps = {
    id: number
}

const initialValues : DirectoyArrayType = { // <---- El valor inicial del estado local
    id: -1,
    nombre: '',
    telefono: '',
    correo: '',
    url: '',
    servicios: [],
    fotos: []
}

function firstValues(id: number, state: DirectoyState): DirectoyArrayType {
    const newValue = id === -1 ? initialValues : state.directorios.find(directorio => directorio.id == id)!

    return newValue
}


export const useNew = ({ id }: useNewProps) => {


    //dispatch - Estado Global
    const { state, dispatch } = useDirectory()

    //Guardar en SessionStorage
    useEffect(() => {
        sessionStorage.setItem('directoryArray', JSON.stringify(state.directorios));
    }, [state.directorios])

    //useState - Estado Local
    const [formData, setFormData] = useState<DirectoyArrayType>(firstValues(id, state))
    const [serviceInput, setServiceInput] = useState('')

    //router
    const router = useRouter()

    //Manejadores de eventos
    //Añade los servicios que ofrece el negocio
    const handleAddServicio = () => {
        if (!formData.servicios.find(servicio => servicio === serviceInput) && serviceInput.trim().length > 0) {
            setFormData({ ...formData, 'servicios': [...formData.servicios, serviceInput] })
        }
        setServiceInput('')
    }

    //Elimina un servicio que ofrece el negocio
    const handleDeleteServicio = (name: string) => {
        const newServicios = formData.servicios.filter(servicio => servicio !== name)

        setFormData({ ...formData, 'servicios': newServicios })
    }

    //Sube los datos al estado global mediante el dispatch
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: "add-directory", payload: formData })

        id == -1 ? setFormData(initialValues) : router.push(`/modificar`)
    }

    //Funcion extra para convertir un Blob a base 64
    function blobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    //El manejador que modifica el estado local para almacenar los datos temporalmente
    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'servicios') {
            setServiceInput(e.target.value)
        } else {
            if (e.target.id === 'fotos') {
                if (e.target.files) {
                    const promises = Array.from(e.target.files).map(file => blobToBase64(file));
                    const base64Images = await Promise.all(promises);


                    setFormData(prev => ({ ...prev, [e.target.id]: [...prev.fotos, ...base64Images] }))
                } else {
                    setFormData({ ...formData, [e.target.id]: ['/fake_photo.jpg'] })
                }
            } else {
                setFormData({ ...formData, [e.target.id]: e.target.value })
            }
        }
    }

    //Validaciones para activar/desactivar el boton de 'AGREGAR'
    const handleValidation = useMemo((): boolean => {
        const {nombre, telefono, correo, url, servicios, fotos} = formData

        return nombre.length > 0 && telefono.length > 0 && correo.length > 0 && url.length > 0 && servicios.length > 0 && fotos.length > 0
    }, [formData])

    //Manejador para elinar las fotos previas en caso de necesitar agregar otras
    const handleResetFotos = () => {
        setFormData({ ...formData, 'fotos': [] })
    }

    return {
        formData,
        setFormData,
        serviceInput,
        handleAddServicio,
        handleDeleteServicio,
        handleSubmit,
        handleChange,
        handleValidation,
        handleResetFotos
    }
}