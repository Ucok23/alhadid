import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import data from '../data/57.json';
import { Ayat20, HayatudDunya } from './tema/ayat20';
import { Route } from '../models';
import { Link } from 'react-router-dom';
import { Ayat20Card } from './ayat/ayat';

interface Feature {
  name: string
  description: string
  icon: any
  path: string
}
const features: Feature[] = [
  {
    name: 'Perintah Tadabbur',
    description:
      "Saudaraku, saat ini kita akan mentadaburi Al-Qur'an. Hal ini kita lalukan berdasarkan dalil.",
    icon: CheckBadgeIcon,
    path: '/home'
  },
  {
    name: 'Seluruh Ayat',
    description:
      'Membaca seluruh ayat beserta artinya sangat penting.',
    icon: LockClosedIcon,
    path: '/full'
  },
  {
    name: 'Per Tema',
    description:
      'Setiap ayat dalam Surah Al-Hadid dapat kita tadaburi.',
    icon: ArrowPathIcon,
    path: '/tema'
  },
  {
    name: 'Profil Penulis',
    description:
      "Telah Allah berikan ilmu Al-Qur'an dan ilmu membuat website.",
    icon: FingerPrintIcon,
    path: '/profile'
  },
]

const Metadata = () => {
  return (
    <div className="mx-auto mt-10 max-w-2xl sm:mt-8 lg:mt-12 lg:max-w-4xl">
      <p className='text-2xl font-bold text-center mb-8'>Tentang Surat Al-Hadid</p>
      <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className='bg-gradient-to-r from-indigo-500 to-blue-500 rounded-tl-lg p-6 text-white'>
          <tr>
            <td>Nama</td>
            <td>: {data.name.short}</td>
          </tr>
          <tr>
            <td>Arti Name</td>
            <td>: {data.name.translation.id}</td>
          </tr>
          <tr>
            <td>Surat Ke</td>
            <td>: {data.number}</td>
          </tr>
          <tr>
            <td>Jumlah Ayat</td>
            <td>: {data.numberOfVerses}</td>
          </tr>
          <tr>
            <td>Diturunkan Di</td>
            <td>: {data.revelation.id}</td>
          </tr>
        </div>
        <div className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-tr-lg p-6'>
          <p>
            {data.tafsir.id}
          </p>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="bg-white py-14 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tadabbur Surah Al-Hadid
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Segala puji bagi Allah, tuhan semesta alam.
            Shalawat dan salam semoga terlimpah curahkan kepada Nabi Muhammad Shollalohu alaihi wa Sallam, juga kepada keluarganya.
          </p>
        </div>
        <Metadata />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Ayat 20</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-8">Salah satu ayat yang penting kita ketahui dalam Surat Al-Hadid adalah ayat 20, yang diantaranya menjelaskan fase kehidupan dunia</p>
          <HayatudDunya />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <Ayat20Card />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>

                <Link to={feature.path} >
                  <button className="mt-2 flex text-base items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center"
                  >
                      <span>
                          Lanjut ...
                      </span>
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          viewBox="0 0 24 24" className="w-4 w-6 h-6 ml-2">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                  </button>
                </Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Home
