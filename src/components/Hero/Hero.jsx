import {BsCodeSlash, BsCode} from 'react-icons/bs'

export default function Hero(){
    return(
        <div className="bg-whitish h-full p-4">
        <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-redish font-extrabold text-5xl py-3">Welcome to My Portfolio</h3>
        <h3 className="text-redish font-bold text-3xl py-3">My name is Sarah, a <BsCode className='inline text-redish w-12'/><p className="inline underline">Front End Web Developer</p><BsCodeSlash className='inline text-redish w-12'/></h3>
        <h3 className="text-redish font-bold text-2xl py-3">and honestly... I used to be a Registered Nurse.</h3>
        <h3 className="text-redish font-bold text-xl py-3">Find more about me <a href="#" className="text-lightGreen hover:underline hover:text-darkGreen">here.</a></h3>
        </div>
        </div>
    )
}