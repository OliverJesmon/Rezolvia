import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { X } from 'lucide-react';
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
   useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '#services', label: 'Services' },
    { id: 3, path: '/digitalmedia', label: 'Digital Media' },
    { id: 4, path: '#contact', label: 'Contact' }
  ]
  return (
    <>
    {/* Overlay  for backdrop blur/dim */}
    {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      )}
{/* Mobile Sidebar */}
    <div
        className={`fixed top-0 left-0 h-full w-64 bg-red-700 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="self-end text-white"
          >
            <X />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`text-xl font-medium ${
                location.pathname === item.path
                  ? 'text-gray-800'
                  : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    <nav className={`${isMobileMenuOpen?'hidden':''} nav-bar fixed top-0 w-full z-50 md:p-4`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-dream text-2xl font-semibold text-gray-700">
          <img src={Logo} alt="Logo" className="h-12 m-4" oncontextmenu="return false;"/>
        </div>
      
        
      <div className={`hidden md:flex mb-2 ${isScrolled?'bg-black text-white transition-all duration-300':'bg-white text-black transition-all duration-300'} rounded-xl space-x-4 px-30 py-2`}>
          {navItems.map((item) => (
            <Link key={item.id} to={item.path} className={` relative group${
                    location.pathname === item.path
                      ? 'text-red-700'
                      : 'hover:text-red-700'
                  }`}>
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-red-700 transform transition-transform duration-300 ${
                    location.pathname === item.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}/>
            </Link>
          ))}
          </div>
          <button
            className="md:hidden mx-3 text-stone-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
      </div>
        </nav>
      
      </>

  )
}

export default Header
