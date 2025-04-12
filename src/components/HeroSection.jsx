import { assets } from "../assets/assets"
        
export default function HeroSection() {


    return (
    <div className="flex flex-col sm:flex-row border items-center justify-between px-8 py-3 bg-[#F4F6F5] rounded-2xl shadow-lg">
    <img src={assets.incendiary_girl} alt="Fashion model" className="sm:opacity-0 sm:hidden w-full sm:w-1/2 mt-4  rounded-lg" />
        <div className="max-w-md flex flex-col ">
        <span className="text-5xl font-extrabold text-primary">LET'S</span>
        <span className="text-5xl font-extrabold text-primary">EXPLORE</span>
        <span className="text-5xl font-extrabold text-accent">UNIQUE </span>
        <span className="text-5xl font-extrabold text-primary">CLOTHES.</span>
        <p className="sm:mt-4 text-muted-foreground">Live for Influential and Innovative fashion!</p>
        
        <a href="#" className="sm:mt-6 bg-black text-bold hover:text-bold hover:bg-[#F4F6F5] hover:border-black border border-black border-[2px] hover:text-black inline-block text-white text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded-lg">
            Shop Now
        </a>
        </div>
    
        <img src={assets.incendiary_girl} alt="Fashion model" className="w-full sm:w-1/2 hidden sm:flex mt-4  rounded-lg" />
    </div>
    )
}