import Image from "next/image"


const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria
    return (
        <div className="flex items-center gap-4 border w-full p-5 hover:bg-amber-500 mx-11">
            <Image 
                width={70}
                height={70}
                src={`/assets/img/${icono}`}
                alt={`Imagen icono ${nombre}`}
            />
            
            <button type="button" className="text-2xl font-bold hover:cursor-pointer">
                {nombre}
            </button>

        </div>
  )
}

export default Categoria