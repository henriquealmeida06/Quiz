import { Link } from "react-router-dom";

function Configuracoes(){
    return(
        <div className="flex flex-col justify-center items-center h-screen gap-3">
            <h1 className="text-4xl">Page Configurações</h1>
            <Link to="/">
            <button className='bg-gray-800 px-4 py-2 font-Roboto rounded-lg outline-none text-white'>Menu</button>
            </Link>
        </div>
    )
}
export default Configuracoes;