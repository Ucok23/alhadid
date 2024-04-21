import { useEffect } from 'react';
import data from '../../data/57.json';
import { Route } from '../../models';
import { AyatList } from '../ayat/ayat';
import { AudioFull } from '../audio/audioPlayer';

export const FullSurah = () => {
      
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
    <div className="mx-auto mt-10 max-w-2xl sm:mt-8 lg:mt-12 lg:max-w-4xl">
      {/* <p className='text-2xl font-bold text-center'>Surah Al-Hadid</p> */}
      <AudioFull />
      <div className="flex items-center justify-center bg-blue-darker w-full py-8">
        <div className="overflow-hidden bg-white rounded leading-normal">
            {
                data.verses.map((ayat) => (
                    <AyatList 
                        index={ayat.number.inSurah} 
                        arab={ayat.text.arab} 
                        transliteration={ayat.text.transliteration.en}
                        translation={ayat.translation.id}
                    />
                ))
            }
        </div>
      </div>
    </div>
    </>
  )
}