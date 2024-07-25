import React from "react";
import BakiImage from '../assets/Baki.jpeg';
import { useNavigate } from 'react-router-dom';

const famousOrators = [
  { name: 'Baki', imageUrl: BakiImage, path:'/Baki' },
  { name: 'Hayyam', imageUrl: BakiImage, path:'/Hayyam'},
  { name: 'Firdevsi', imageUrl: BakiImage, path:'/Firdevsi'},
  { name: 'Mevlana', imageUrl: BakiImage, path:'/Mevlana' },
  { name: 'Sadi-i Şirazi', imageUrl: BakiImage, path:'/Sadi-i-sirazi'},
  { name: 'Hafız-ı Şirazi', imageUrl: BakiImage, path:'/Hafiz-i-sirazi' }
];

const centuries = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-orange-100 flex flex-col items-center text-center font-sans p-4">
      <h1 className="text-3xl font-bold my-4">Ünlü Şairler</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {famousOrators.map((orator, index) => (
          <div key={index} className="mb-3 flex flex-col items-center" onClick={() => handleNavigation(orator.path)}>
            <img
              src={orator.imageUrl}
              alt={orator.name}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full"
            />
            <button className="mt-2 px-4 py-2 bg-red-700 text-white rounded">
              {orator.name}
            </button>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold my-4">Yüzyıla Göre Sınıflandırma</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {centuries.map((century, index) => (
          <button
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-red-700 text-white rounded-full"
          >
            {century}
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-semibold my-4">Dördüncü Yüzyıl</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={BakiImage}
                alt="Rodki"
                className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full"
              />
              <button className="mt-2 px-4 py-2 bg-red-700 text-white rounded">
                Rodki
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;