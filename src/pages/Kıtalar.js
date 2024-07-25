import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import CommentSection from '../components/CommentSection';

export const Kıta = () => {
  const { id } = useParams();
  const kıta = data.kitalar[parseInt(id) - 1];

  if (!kıta) {
    return <p>Kıta bulunamadı</p>;
  }

  return (
    <div className="min-h-screen bg-orange-100 py-20 flex flex-col items-center">
      <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 text-center border border-gray-300 mb-4">
        <h2 className="text-2xl font-bold text-red-700 my-4">{kıta.başlık}</h2>
        <div className="text-left">
          {kıta.dizeler.map((dize, index) => (
            <p key={index}>{dize}</p>
          ))}
        </div>
        <a href="/Baki" className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Baki Sayfasına Geri Dön
        </a>
      </div>

      <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 text-center border border-gray-300">
        <CommentSection poemId={id} poemType="kıta" /> {/* Yorum bileşenini kullanın */}
      </div>
    </div>
  );
};

export default Kıta;