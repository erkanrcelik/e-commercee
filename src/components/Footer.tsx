import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <h3 className="text-2xl font-bold mb-4 md:mb-0">E-Commerce</h3>
        </div>
        <p className="text-sm ml-0 md:ml-4">© 2024 E-Commerce. Tüm Hakları Saklıdır.</p>
        <div className="flex items-center mt-4 md:mt-0">
          <a href="#" className="mr-4 hover:text-gray-400 transition duration-300">
            <IoLogoFacebook size={24} />
          </a>
          <a href="#" className="mr-4 hover:text-gray-400 transition duration-300">
            <IoLogoTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <IoLogoInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
