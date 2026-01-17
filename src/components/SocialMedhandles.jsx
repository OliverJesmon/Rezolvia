
import { Instagram,Facebook,Youtube,Linkedin } from "lucide-react"
import { FaPinterest } from "react-icons/fa"
function SocialMedhandles() {
  return (
    <>
       <div className="flex flex-col space-y-6 fixed top-1/4 md:right-4 right-2 top-0 bottom-0 transform -translate-y-center pt-20 z-15">
                
                <a href="https://www.facebook.com/MangaloreBusiness" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-600 transition-transform">
                    <Facebook size={20} />
                </a>

                <a href="https://www.youtube.com/@MangaloreBusiness" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-red-700 transition-transform">
                    <Youtube size={20} />
                    
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-red-500 transition-transform">
                    <FaPinterest size={20} />
                    
                </a>
                <a href="https://x.com/MangaloreBiz" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-transform hover:border-white">
                    <img src='/x.png' alt="X logo" className="h-[20px] w-[20px]" oncontextmenu="return false;"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-gradient-to-bl hover:from-purple-500 hover:via-red-500 hover:to-yellow-500 transition-transform">
                    <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-500 transition-transform">
                    <Linkedin size={20} />
                </a>
            </div>
    </>
  )
}

export default SocialMedhandles
