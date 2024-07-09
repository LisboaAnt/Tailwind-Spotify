import { Footer } from '@/components/Footer';
import { HomeMusics } from '@/components/HomeMusics';
import { MadeOf } from '@/components/MedeOf';
import { Sidebar } from '@/components/Sidebar';
import {Home as homeIcon, Search, Library, HomeIcon, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (

    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1.5'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1.5'>
              <ChevronRight/>
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'> Good Afternoon</h1>
          <HomeMusics/>
          
          <h2 className='font-semibold text-2xl mt-10'> Made for Antonio Lisboa</h2>
          <MadeOf/>
        </main>

      </div>
    </div>
  );
}
