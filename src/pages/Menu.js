import {Link} from 'react-router-dom'

function Menu(){
    return(
        <div className="bg-blue-400 h-screen font-Roboto flex flex-col justify-center items-center overflow-x-hidden">
            <h1 className="text-gray-800 text-5xl  tracking-widest mb-7 font-semibold">MEU QUIZ</h1>
            <div className="flex flex-col gap-4 ">
            <Link to="/home">
            <button className="bg-gray-800 px-8 py-2 w-full hover:bg-gray-600 transition duration-100 ease-in text-white rounded-lg text-2xl">Jogar</button>
            </Link>
            <Link to="/ranking">
            <button className="bg-gray-800 px-8 py-2 w-full text-white rounded-lg text-2xl hover:bg-gray-600 transition duration-100 ease-in">Ranking</button>
            </Link>
            <Link to="/configuracoes">
            <button className="bg-gray-800 px-8 py-2 w-full text-white rounded-lg text-2xl hover:bg-gray-600 transition duration-100 ease-in">Configurações</button>
            </Link>
            </div>
        </div>
    )
}
export default Menu;