import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    
        <div className="mx-auto px-6 text-center md:flex-col md:justify-between">
            <div className="text-2xl text-white font-bold md:absolute md:left-15 mb-4"><img src={Logo} alt="Logo" className="h-12 md:m-4 mx-15" /></div>
            <p className="text-gray-400 md:absolute md:right-15">© 2014-2026 Rezolvia. All rights reserved.</p>
        </div>
    
  );
};
export default Footer;