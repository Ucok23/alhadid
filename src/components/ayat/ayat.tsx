export const AyatList: React.FC<{index: number, arab: string, transliteration: string, translation: string}> = ({...props}) => {
  return (
    <div className="block group hover:bg-blue px-4 border-b" key={props.index}>
      <span className="text-bold mb-2 bg-black text-white px-2 py-1">{props.index}</span>
      <div className="pb-8">
        <p className="text-2xl mb-1 text-right mt-4">{props.arab}</p>
        <p className="text-gray-700 text-md italic mb-2">{props.transliteration}</p>
        <p className="text-gray-darker text-md mb-2">{props.translation}</p>
      </div>
    </div>
  )
}

export const Ayat20Card = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-xl px-6 py-4">
      <p className="text-center">
        <span className="bg-gray-800 text-white text-center rounded-lg p-2">20</span>
      </p>
      <p className="text-right mt-4 text-xl">اعْلَمُوا أَنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌ بَيْنَكُمْ وَتَكَاثُرٌ فِي الْأَمْوَالِ وَالْأَوْلَادِ ۖ كَمَثَلِ غَيْثٍ أَعْجَبَ الْكُفَّارَ نَبَاتُهُ ثُمَّ يَهِيجُ فَتَرَاهُ مُصْفَرًّا ثُمَّ يَكُونُ حُطَامًا ۖ وَفِي الْآخِرَةِ عَذَابٌ شَدِيدٌ وَمَغْفِرَةٌ مِّنَ اللَّهِ وَرِضْوَانٌ ۚ وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ</p>
      <p className="mt-4 text-md">Ketahuilah, sesungguhnya kehidupan dunia itu hanyalah permainan dan sendagurauan, perhiasan dan saling berbangga di antara kamu serta berlomba dalam kekayaan dan anak keturunan, seperti hujan yang tanam-tanamannya mengagumkan para petani; kemudian (tanaman) itu menjadi kering dan kamu lihat warnanya kuning kemudian menjadi hancur. Dan di akhirat (nanti) ada azab yang keras dan ampunan dari Allah serta keridaan-Nya. Dan kehidupan dunia tidak lain hanyalah kesenangan yang palsu.</p>
    </div>
  )
}