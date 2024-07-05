/** 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logoBaki.jpeg";

export const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [isPinned, setIsPinned] = useState(true); // Yeni durum ekliyoruz
  const [poets, setPoets] = useState([
    { name: 'Baki', path: '/Baki' },
    { name: 'Hayyam', path: '/Hayyam' },
    { name: 'Firdevsi', path: '/Firdevsi' },
    { name: 'Mevlana', path: '/Mevlana' },
    { name: 'Sadi-i Şirazi', path: '/Sadi-i-sirazi' },
    { name: 'Hafız-ı Şirazi', path: '/Hafiz-i-sirazi' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const results = poets.filter(poet =>
      poet.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchResults([]); // Arama sonuçlarını sıfırlıyoruz.
    setSearchTerm(''); // Arama kutusunu temizliyoruz.
  };

  const handlePinClick = () => {
    setIsPinned(!isPinned);
  };

  return (
    <div className="bg-orange-100">
      <div className="flex justify-center">
        <img
          src={Logo}
          className="mt-7 block h-28 rounded-full cursor-pointer"
          alt="Logo"
          onClick={handleLogoClick}
        />
      </div>

      <div className="bg-orange-100 mt-2.5 relative">
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">Ara</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Şair ara..."
              required
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-md z-50">
                {searchResults.map((poet, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleResultClick(poet.path)}
                  >
                    {poet.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>

      <div className={`mt-4 flex justify-center items-center transition ${isSticky && isPinned ? 'bg-orange-100 fixed top-0 left-0 w-full z-50' : 'bg-orange-100'}`}>
        <div className={`p-3 w-3/4 bg-red-500 text-white rounded-lg border border-gray-200 shadow-md flex justify-between items-center`}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer ${isPinned ? 'text-white' : 'text-red-950'}`}
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={handlePinClick}
            >
              <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354"/>
            </svg>
          </div>
          <div className="flex items-center space-x-1.5 p-3 bg-red-700 text-white shadow-md rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle text-white" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <button onClick={handleLoginClick} className="px-4 py-2 text-sm font-medium text-white bg-red-400 rounded hover:bg-red-950 focus:outline-none focus:ring-4 focus:ring-red-300 flex items-center">
              Giriş Yap
            </button>
            <button onClick={handleSignupClick} className="px-4 py-2 text-sm font-medium text-white bg-red-400 rounded hover:bg-red-950 focus:outline-none focus:ring-4 focus:ring-red-300">
              Kaydol
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <svg onClick={scrollToBottom} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
            </svg>
            <svg onClick={scrollToTop} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logoBaki.jpeg";

export const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [isPinned, setIsPinned] = useState(true); // Yeni durum ekliyoruz
  const [poets, setPoets] = useState([
    { name: 'Baki', path: '/Baki' },
    { name: 'Hayyam', path: '/Hayyam' },
    { name: 'Firdevsi', path: '/Firdevsi' },
    { name: 'Mevlana', path: '/Mevlana' },
    { name: 'Sadi-i Şirazi', path: '/Sadi-i-sirazi' },
    { name: 'Hafız-ı Şirazi', path: '/Hafiz-i-sirazi' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const results = poets.filter(poet =>
      poet.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchResults([]); // Arama sonuçlarını sıfırlıyoruz.
    setSearchTerm(''); // Arama kutusunu temizliyoruz.
  };

  const handlePinClick = () => {
    setIsPinned(!isPinned);
  };

  return (
    <div className="bg-orange-100">
      <div className="flex justify-center">
        <img
          src={Logo}
          className="mt-7 block h-28 rounded-full cursor-pointer"
          alt="Logo"
          onClick={handleLogoClick}
        />
      </div>

      <div className="bg-orange-100 mt-2.5 relative">
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">Ara</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Şair ara..."
              required
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-md z-50">
                {searchResults.map((poet, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleResultClick(poet.path)}
                  >
                    {poet.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      <div className={`mt-4 flex justify-center items-center transition ${isSticky && isPinned ? 'bg-orange-100 fixed top-0 left-0 w-full z-50' : 'bg-orange-100'}`}>
        <div className={`p-3 w-3/4 bg-red-500 text-white rounded-lg border border-gray-200 shadow-md flex justify-between items-center`}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer ${isPinned ? 'text-white' : 'text-red-950'}`}
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={handlePinClick}
            >
              <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354"/>
            </svg>
          </div>
          <div className="flex items-center space-x-1.5 p-3 bg-red-700 text-white shadow-md rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle text-white" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <button onClick={handleLoginClick} className="px-4 py-2 text-sm font-medium text-white bg-red-400 rounded hover:bg-red-950 focus:outline-none focus:ring-4 focus:ring-red-300 flex items-center">
              Giriş Yap
            </button>
            <button onClick={handleSignupClick} className="px-4 py-2 text-sm font-medium text-white bg-red-400 rounded hover:bg-red-950 focus:outline-none focus:ring-4 focus:ring-red-300">
              Kaydol
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <svg onClick={scrollToBottom} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
            </svg>
            <svg onClick={scrollToTop} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;