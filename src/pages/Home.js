import Pergunta from "../components/Pergunta";


function Home(){
    return(
        <div className="bg-blue-400 h-screen flex justify-center items-center">
            <div className="w-screen flex justify-center items-center flex-col gap-1">
                
            <Pergunta/>
            </div>

        </div>
    )
}
export default Home;