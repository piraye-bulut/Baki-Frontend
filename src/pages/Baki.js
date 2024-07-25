/** 
import React from 'react';
import MolanaImage from '../assets/Baki.jpeg';
import DropdownMenu from '../components/DropdownMenu';
import data from '../data.json';

export const Baki = () => {
  return (
    <div className="min-h-screen bg-orange-100 py-20">
      <div className="flex justify-center items-center h-full">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 text-center border border-gray-300">
          <img src={MolanaImage} alt="Molana" className="w-32 h-32 rounded-full mx-auto" />
          <h2 className="text-2xl font-bold text-red-700 my-4">Baki</h2>
        
          <p className="text-justify m-4 text-black-800">
            Bâkî, şüphesiz, Türk edebiyatının en büyük şairlerinden biridir. Devrinde “Sultânü’ş-şu’arâ” olarak tanınan bu büyük sanatkâr hem zamanında hem de daha sonraki yüzyıllarda yetişen şairler üzerinde tesirli olmuştur. Ne yazık ki Bâkî’nin sanat yönünü ortaya koyan Dîvânının mümkün olduğu kadar yanlış ve eksiklerden uzak tenkitli bir metnine sahip değiliz. Ancak söz konusu eser, şimdiye kadar üç defa basılmıştır. Bu baskılar sırasıyla şunlardır:
          </p>
          <p className="text-justify m-4 text-black-800">
            1. Divân-ı Bâkî. Muzıka-i Hümâyûn Litografya Tezgâhı, İstanbul 1276, 256 s.
            İçerisinde 27 kaside, 2 terkîb-i bend, 1 terci-i bend, 1 muhammes, 3 tahmis, 519 gazel, Farsça 4 mesnevî ve 3 beyit bulunmaktadır. Taşbasması olarak basılan bu eser, eksik ve yanlışlıklarla doludur.
          </p>
          <p className="text-justify m-4 text-black-800">
            2. Bâkî’s Diwân, Ghazalijjât. Yayınla.: Ord. Prof. Dr. Rudolf Dvorak. Leiden I.c. 1908, II. c. 1911, LXXV-666 s.
            Leiden, Leipzig ve München nüshalarından karşılaştırılarak hazırlanan bu baskıda kasideler, terkib-i bendler, terci-i bend yoktur. Ancak, gazeller bölümünde 9 kaside vardır. Eserin başında Dvorak’ın 75 sayfalık bir inceleme yazısı yer almaktadır. Baskıda 1 muhammes, 6 tahmis, 549 gazel, 17 kıt’a, 27 beyit, Farsça 3 tahmis, 8 gazel, 3 mesnevî ve 3 beyit yer almaktadır. Dvorak, Arapça ve Farsça kelimelerin doğrularını yazmıştır. Ancak Türkçe kelimelerin birçok yerde yanlış okunduğunu görmekteyiz.
          </p>
          <p className="text-justify m-4 text-black-800">
            3. Sadeddin Nüzhet Ergun, Bâkî, Hayatı ve Şiirleri. c. 1. Divan. İstanbul 1935, XV+502 s.
            Bu baskı diğerlerine göre daha doğru ve tamdır. 15 sayfalık bir “Başlangıçtan sonra 503 sayfa tutan metin kısmı gelmektedir. İçerisinde 28 kaside, 2 terkib-i bend, 1 terci-i bend, 1 muhammes, 6 tahmis, 556 gazel, 20 kıt’a, 27 beyit, 1 tarih, Farsça 3 tahmis, 8 gazel, 3 mesnevî ve 3 beyit vardır.
          </p>

          <DropdownMenu title="KASİDELER" poems={data.kasideler} type="Kaside" />
          <DropdownMenu title="MUSAMMATLAR" poems={data.musammatlar} type="Musammat" />
          <DropdownMenu title="GAZELLER" poems={data.gazeller} type="Gazel" />
          <DropdownMenu title="KIT'ALAR" poems={data.kitalar} type="Kıta" />
          <DropdownMenu title="MATLALAR" poems={data.matlalar} type="Matla" />
        </div>
      </div>
    </div>
  );
};
export default Baki;
*/



import React from 'react';
import MolanaImage from '../assets/Baki.jpeg';
import DropdownMenu from '../components/DropdownMenu';
import data from '../data.json';

export const Baki = () => {
  return (
    <div className="min-h-screen bg-orange-100 py-20">
      <div className="flex justify-center items-center h-full">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 text-center border border-gray-300">
          <img src={MolanaImage} alt="Molana" className="w-32 h-32 rounded-full mx-auto" />
          <h2 className="text-2xl font-bold text-red-700 my-4">Baki</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="rounded-full bg-white p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-book text-red-500" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
              </svg>
            </div>
            <div className="rounded-full bg-white p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-image text-red-500" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
              </svg>
            </div>
            <div className="rounded-full bg-white p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-percent text-red-500" viewBox="0 0 16 16">
                <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </div>
            <div className="rounded-full bg-white p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search text-red-500" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </div>
          </div>
          <p className="text-justify m-4 text-black-800">
            Bâkî, şüphesiz, Türk edebiyatının en büyük şairlerinden biridir. Devrinde “Sultânü’ş-şu’arâ” olarak tanınan bu büyük sanatkâr hem zamanında hem de daha sonraki yüzyıllarda yetişen şairler üzerinde tesirli olmuştur. Ne yazık ki Bâkî’nin sanat yönünü ortaya koyan Dîvânının mümkün olduğu kadar yanlış ve eksiklerden uzak tenkitli bir metnine sahip değiliz. Ancak söz konusu eser, şimdiye kadar üç defa basılmıştır. Bu baskılar sırasıyla şunlardır:
          </p>
          <p className="text-justify m-4 text-black-800">
            1. Divân-ı Bâkî. Muzıka-i Hümâyûn Litografya Tezgâhı, İstanbul 1276, 256 s.
            İçerisinde 27 kaside, 2 terkîb-i bend, 1 terci-i bend, 1 muhammes, 3 tahmis, 519 gazel, Farsça 4 mesnevî ve 3 beyit bulunmaktadır. Taşbasması olarak basılan bu eser, eksik ve yanlışlıklarla doludur.
          </p>
          <p className="text-justify m-4 text-black-800">
            2. Bâkî’s Diwân, Ghazalijjât. Yayınla.: Ord. Prof. Dr. Rudolf Dvorak. Leiden I.c. 1908, II. c. 1911, LXXV-666 s.
            Leiden, Leipzig ve München nüshalarından karşılaştırılarak hazırlanan bu baskıda kasideler, terkib-i bendler, terci-i bend yoktur. Ancak, gazeller bölümünde 9 kaside vardır. Eserin başında Dvorak’ın 75 sayfalık bir inceleme yazısı yer almaktadır. Baskıda 1 muhammes, 6 tahmis, 549 gazel, 17 kıt’a, 27 beyit, Farsça 3 tahmis, 8 gazel, 3 mesnevî ve 3 beyit yer almaktadır. Dvorak, Arapça ve Farsça kelimelerin doğrularını yazmıştır. Ancak Türkçe kelimelerin birçok yerde yanlış okunduğunu görmekteyiz.
          </p>
          <p className="text-justify m-4 text-black-800">
            3. Sadeddin Nüzhet Ergun, Bâkî, Hayatı ve Şiirleri. c. 1. Divan. İstanbul 1935, XV+502 s.
            Bu baskı diğerlerine göre daha doğru ve tamdır. 15 sayfalık bir “Başlangıçtan sonra 503 sayfa tutan metin kısmı gelmektedir. İçerisinde 28 kaside, 2 terkib-i bend, 1 terci-i bend, 1 muhammes, 6 tahmis, 556 gazel, 20 kıt’a, 27 beyit, 1 tarih, Farsça 3 tahmis, 8 gazel, 3 mesnevî ve 3 beyit vardır.
          </p>

          <DropdownMenu title="KASİDELER" poems={data.kasideler} type="Kaside" />
          <DropdownMenu title="MUSAMMATLAR" poems={data.musammatlar} type="Musammat" />
          <DropdownMenu title="GAZELLER" poems={data.gazeller} type="Gazel" />
          <DropdownMenu title="KIT'ALAR" poems={data.kitalar} type="Kıta" />
          <DropdownMenu title="MATLALAR" poems={data.matlalar} type="Matla" />
        </div>
      </div>
    </div>
  );
};

export default Baki;

