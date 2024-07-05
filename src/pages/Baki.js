
import React from 'react';
import MolanaImage from '../assets/Baki.jpeg';
import data from '../data.json';

const PoetryList = ({ title, poems }) => (
  <div>
    <h2 className="text-2xl font-bold text-red-700 my-4">{title}</h2>
    {poems && poems.length > 0 ? (
      poems.map((poem, index) => (
        <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3 className="text-xl font-bold text-red-700 my-2">{`${poem.başlık}`}</h3>
          <div style={{ display: 'inline-block', textAlign: 'left' }}>
            {poem.dizeler.map((dize, idx) => (
              <p key={idx}>{dize}</p>
            ))}
          </div>
        </div>
      ))
    ) : (
      <p>Veri bulunamadı</p>
    )}
  </div>
);

export const Baki = () => {
  return (
    <div className="mt-20 min-h-screen bg-orange-100">
      <div className="flex justify-center items-center h-full">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 text-center border border-gray-300">
          <img src={MolanaImage} alt="Molana" className="w-32 h-32 rounded-full mx-auto" />
          <h2 className="text-2xl font-bold text-red-700 my-4">Baki</h2>

          <p className="text-justify m-4 text-black-800">
            Bâkî, şüphesiz, Türk edebiyatının en büyük şairlerinden biridir. Devrinde “Sultânü’ş-şu’arâ” olarak tanınan bu büyük sanatkâr hem zamanında hem de daha sonraki yüzyıllarda yetişen şairler üzerinde tesirli olmuştur. Ne yazık ki Bâkî’nin sanat yönünü ortaya koyan Dîvânının mümkün olduğu kadar yanlış ve eksiklerden uzak tenkitli bir metnine sahip değiliz. Ancak söz konusu eser, şimdiye kadar üç defa basılmıştır. Bu baskılar sırasıyla şunlardır:
          </p>
          <p>
            1. Divân-ı Bâkî. Muzıka-i Hümâyûn Litografya Tezgâhı, İstanbul 1276, 256 s.
            İçerisinde 27 kaside, 2 terkîb-i bend, 1 terci-i bend, 1 muhammes, 3 tahmis, 519 gazel, Farsça 4 mesnevî ve 3 beyit bulunmaktadır. Taşbasması olarak basılan bu eser, eksik ve yanlışlıklarla doludur.
          </p>
          <p>
            2. Bâkî’s Diwân, Ghazalijjât. Yayınla.: Ord. Prof. Dr. Rudolf Dvorak. Leiden I.c. 1908, II. c. 1911, LXXV-666 s.
            Leiden, Leipzig ve München nüshalarından karşılaştırılarak hazırlanan bu baskıda kasideler, terkib-i bendler, terci-i bend yoktur. Ancak, gazeller bölümünde 9 kaside vardır. Eserin başında Dvorak’ın 75 sayfalık bir inceleme yazısı yer almaktadır. Baskıda 1 muhammes, 6 tahmis, 549 gazel, 17 kıt’a, 27 beyit, Farsça 3 tahmis, 8 gazel, 3 mesnevî ve 3 beyit yer almaktadır. Dvorak, Arapça ve Farsça kelimelerin doğrularını yazmıştır. Ancak Türkçe kelimelerin birçok yerde yanlış okunduğunu görmekteyiz.
          </p>
          <p>
            3. Sadeddin Nüzhet Ergun, Bâkî, Hayatı ve Şiirleri. c. 1. Divan. İstanbul 1935, XV+502 s.
            Bu baskı diğerlerine göre daha doğru ve tamdır. 15 sayfalık bir “Başlangıçtan sonra 503 sayfa tutan metin kısmı gelmektedir. İçerisinde 28 kaside, 2 terkib-i bend, 1 terci-i bend, 1 muhammes, 6 tahmis, 556 gazel, 20 kıt’a, 27 beyit, 1 tarih, Farsça 3 tahmis, 8 gazel, 3 mesnevî ve 3 beyit vardır.
          </p>

          <PoetryList title="KASİDELER" poems={data.kasideler} />
          <PoetryList title="MUSAMMATLAR" poems={data.musammatlar} />
          <PoetryList title="GAZELLER" poems={data.gazeller} />
          <PoetryList title="KIT'ALAR" poems={data.kitalar} />
          <PoetryList title="MATLALAR" poems={data.matlalar} />
        </div>
      </div>
    </div>
  );
};

export default Baki;