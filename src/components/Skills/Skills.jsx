import {SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss} from 'react-icons/si'

export default function Skills(){
    return(
        <div className="h-full bg-lightGreen p-5">
        <h3 className="text-darkGreen text-5xl font-extrabold text-center m-3 pb-4">Technical Skills</h3> 
        <div className="flex lg:flex-row flex-col items-center justify-around m-7">
        <p className='text-whitish text-xl font-semibold'>HTML5<SiHtml5 className='inline w-10 mb-1 text-redish'/></p>
        <p className='text-whitish text-xl font-semibold'>CSS3<SiCss3 className='inline w-10 mb-1 text-redish'/></p>
        <p className='text-whitish text-xl font-semibold'>JavaScript<SiJavascript className='inline w-10 mb-1 text-redish'/></p>
        <p className='text-whitish text-xl font-semibold'>React<SiReact className='inline w-10 mb-1 text-redish'/></p>
        <p className='text-whitish text-xl font-semibold'>BootStrap<SiBootstrap className='inline w-10 mb-1 text-redish'/></p>
        <p className='text-whitish text-xl font-semibold'>Tailwind Css<SiTailwindcss className='inline w-10 mb-1 text-redish'/></p>
        </div>
        <h3 className="text-darkGreen text-5xl font-extrabold text-center m-3 pb-4">Experience In</h3> 
        <div className="flex lg:flex-row flex-col items-center justify-around m-7">
        <p className='text-whitish text-xl font-semibold'>Redux Toolkit</p>
        <p className='text-whitish text-xl font-semibold'>Firebase</p>
        <p className='text-whitish text-xl font-semibold'>Object Oriented Programming</p>
        <p className='text-whitish text-xl font-semibold'>Git & Github</p>
        <p className='text-whitish text-xl font-semibold'>Responsive Web Design</p>
        </div>
        </div>
    )
}