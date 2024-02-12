import {useState} from 'react'
import {Link} from 'react-router-dom'

function Pergunta(){

    const [selecionarA, setSelecionarA] = useState(false)
    const [selecionarB, setSelecionarB] = useState(false)
    const [selecionarC, setSelecionarC] = useState(false)
    const [selecionarD, setSelecionarD] = useState(false)


    function selecionado(alternativa){
        setSelecionarA(false)
        setSelecionarB(false)
        setSelecionarC(false)
        setSelecionarD(false)

        switch (alternativa){
            case 'A':
                setSelecionarA(true);
                break;
            case 'B':
                setSelecionarB(true);
                break;
            case 'C':
                setSelecionarC(true);
                break;
            case 'D':
                setSelecionarD(true);
                break;
        }
    }


    return(

        <div className="flex flex-col justify-center items-center overflow-x-hidden">
        <div className=" px-10 py-5 w-1/2 h-1/4 mb-4 bg-gray-800 flex justify-center rounded-lg">
            <p className="text-white font-Roboto text-lg lg:text-2xl ">Quem descobriu o Brasil?</p>
        </div>

        <div onClick={()=> selecionado('A')} className="w-1/2 bg-transparent flex gap-3  font-Roboto">
        <div className={`bg-gray-800 px-5 py-2 cursor-pointer ${selecionarA? "bg-gray-800": ''}`}><p className="text-white">A</p></div>
        <div className={`w-screen flex justify-start cursor-pointer items-center ${selecionarA? "bg-green-700":'bg-white'}`}><p className={`text-gray-800 pl-4 font-medium ${selecionarA?"text-white":''}`}>Abraham Lincoln</p></div>
        </div>

         <div onClick={()=> selecionado('B')} className="w-1/2 py-2 bg-transparent flex gap-3  font-Roboto">
        <div className={`bg-gray-800 px-5 py-2 cursor-pointer ${selecionarB? "bg-green-800":''}`}><p className="text-white">B</p></div>
        <div className={`w-screen flex justify-start cursor-pointer items-center ${selecionarB? " bg-green-800":'bg-white '}`}><p className={`text-gray-800 pl-4 font-medium ${selecionarB? "text-white":''}`}>Napoleão Bonaparte</p></div>
        </div>

         <div onClick={()=> selecionado('C')} className="w-1/2 py-2 bg-transparent flex gap-3  font-Roboto">
        <div className={`bg-gray-800 px-5 py-2 cursor-pointer ${selecionarC? "bg-green-800":''}`}><p className="text-white">C</p></div>
        <div className={` w-screen flex justify-start cursor-pointer items-center ${selecionarC?"bg-green-800":'bg-white '}`}><p className={`text-gray-800 pl-4 font-medium ${selecionarC?'text-white':''}`}>Pedro Álvares Cabral</p></div>
        </div>

         <div onClick={()=> selecionado('D')} className="w-1/2 py-2 bg-transparent flex gap-3  font-Roboto">
        <div className={`bg-gray-800 px-5 py-2 cursor-pointer ${selecionarD? "bg-green-800":''}`}><p className="text-white">D</p></div>
        <div className={` w-screen flex justify-start cursor-pointer items-center ${selecionarD?'bg-green-800':'bg-white '}`}><p className={`text-gray-800 pl-4 font-medium ${selecionarD? "text-white":''}`}>José Ribeiro Lima</p></div>
        </div>

        <div className='mt-3 flex gap-5'>
            <Link to="/">
            <button className='bg-gray-800 px-4 py-2 font-Roboto rounded-lg outline-none text-white'>Menu</button>
            </Link>
            <button className='bg-gray-800 px-4 py-2 font-Roboto rounded-lg outline-none text-white'>Confirmar</button>
            
        </div>
         </div>
    )
}
export default Pergunta;