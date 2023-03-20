import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

const Sidebar = () => {

    const {categorias} = useQuiosco()

  return (
    <>
        <Image 
            width={100}
            height={50}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
            className="w-full mx-auto p-10"
        />

        <nav className="mt-5">
        {categorias.map( categoria => (
            <Categoria 
                key={categoria.id}
                categoria = {categoria}
            />
        ) )}
        </nav>
    </>
  )
}

export default Sidebar
