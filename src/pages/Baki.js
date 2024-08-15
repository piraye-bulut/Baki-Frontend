//İKONLARIN OLMADIĞI KOD
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


//İLK İKONLARIN OLDUĞU 
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
*/
import React, { useState, useRef } from 'react';
import MolanaImage from '../assets/Baki.jpeg';
import DropdownMenu from '../components/DropdownMenu';
import data from '../data.json';

export const Baki = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // İlk olarak hiçbir menü açık değil
  const kasidelerRef = useRef(null);
  const musammatlarRef = useRef(null);
  const gazellerRef = useRef(null);
  const kitalarRef = useRef(null);
  const matlalarRef = useRef(null);

  const handleIconClick = (menu, ref) => {
    const newMenu = openDropdown === menu ? null : menu;
    setOpenDropdown(newMenu);
    if (newMenu) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-orange-100 py-20">
      <div className="flex justify-center items-center h-full">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 text-center border border-gray-300">
          <img src={MolanaImage} alt="Molana" className="w-32 h-32 rounded-full mx-auto" />
          <h2 className="text-2xl font-bold text-red-700 my-4">Baki</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="p-2" onClick={() => handleIconClick('kasideler', kasidelerRef)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8B0000" className="w-6 h-6 bi bi-1-circle cursor-pointer" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
              </svg>
            </div>
            <div className="p-2" onClick={() => handleIconClick('musammatlar', musammatlarRef)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8B0000" className="w-6 h-6 bi bi-2-circle cursor-pointer" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
              </svg>
            </div>
            <div className="p-2" onClick={() => handleIconClick('gazeller', gazellerRef)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8B0000" className="w-6 h-6 bi bi-3-circle cursor-pointer" viewBox="0 0 16 16">
                <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
              </svg>
            </div>
            <div className="p-2" onClick={() => handleIconClick('kitalar', kitalarRef)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8B0000" className="w-6 h-6 bi bi-4-circle cursor-pointer" viewBox="0 0 16 16">
                <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
              </svg>
            </div>
            <div className="p-2" onClick={() => handleIconClick('matlalar', matlalarRef)}>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="#8B0000" class="w-6 h-6 bi bi-5-circle cursor-pointer" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
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
        
          <div ref={kasidelerRef}>
            <DropdownMenu title="KASİDELER" poems={data.kasideler} type="Kaside" isOpen={openDropdown === 'kasideler'} toggleDropdown={() => setOpenDropdown(openDropdown === 'kasideler' ? null : 'kasideler')} />
          </div>
          <div ref={musammatlarRef}>
            <DropdownMenu title="MUSAMMATLAR" poems={data.musammatlar} type="Musammat" isOpen={openDropdown === 'musammatlar'} toggleDropdown={() => setOpenDropdown(openDropdown === 'musammatlar' ? null : 'musammatlar')} />
          </div>
          <div ref={gazellerRef}>
            <DropdownMenu title="GAZELLER" poems={data.gazeller} type="Gazel" isOpen={openDropdown === 'gazeller'} toggleDropdown={() => setOpenDropdown(openDropdown === 'gazeller' ? null : 'gazeller')} />
          </div>
          <div ref={kitalarRef}>
            <DropdownMenu title="KIT'ALAR" poems={data.kitalar} type="Kıta" isOpen={openDropdown === 'kitalar'} toggleDropdown={() => setOpenDropdown(openDropdown === 'kitalar' ? null : 'kitalar')} />
          </div>
          <div ref={matlalarRef}>
            <DropdownMenu title="MATLALAR" poems={data.matlalar} type="Matla" isOpen={openDropdown === 'matlalar'} toggleDropdown={() => setOpenDropdown(openDropdown === 'matlalar' ? null : 'matlalar')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baki;

