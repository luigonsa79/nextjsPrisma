import { useState, useEffect, createContext} from "react"

import axios from "axios"

const QuioscoContext = createContext()

const QuioscoProvider = ({children})=>{

    const [categorias, setCategorias] = useState([])

    const obtenerCategoria = async  () => {
        try {
            const {data}= await axios('/api/categorias')
            setCategorias(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        obtenerCategoria()
    },[])

    return (
        <QuioscoContext.Provider
        value={{ 
            categorias
         }}
        >
        
        {children}

        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext