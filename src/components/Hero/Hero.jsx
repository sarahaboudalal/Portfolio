export default function Hero(){
    return(
        <div className="bg-whitish h-full">
        <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-redish font-extrabold text-5xl py-3">Welcome to My Portfolio</h3>
        <h3 className="text-redish font-bold text-3xl py-3">My name is Sarah, I am a Front End Web developer</h3>
        <h3 className="text-redish font-bold text-2xl py-3">and honestly... I used to be a Registered Nurse.</h3>
        <h3 className="text-redish font-bold text-xl py-3">Find more about my story <a href="#" className="text-lightGreen hover:underline hover:text-darkGreen">here</a></h3>
        </div>
        </div>
    )
}