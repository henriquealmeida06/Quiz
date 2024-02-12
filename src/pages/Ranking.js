import { Link } from "react-router-dom";

function Ranking(){
    return(
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-4xl ">Page Ranking</h1>
            <Link to="/">
            <button className='bg-gray-800 px-4 py-2 font-Roboto rounded-lg outline-none text-white'>Menu</button>
            </Link>
        </div>
    )
}
export default Ranking;