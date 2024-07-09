import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image';

export function Footer(){
    return(
    <div className="fixed bottom-0 left-0 w-full">
    <footer className="bg-zinc-900 border-t border-zinc-700 p-3 flex items-center justify-between">
        
        <div className="flex items-center gap-3 mr-28">
          <Image src="/album1.jpg" className="w-full" width={48} height={48} alt="Capa do álbum"/>
          <div className='flex flex-col '>
            <strong className='font-normal'>Rope</strong>
            <span className='text-xs text-zinc-400'>Foo Fighters</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mx-4 ">

          <div className='flex items-center gap-4'>
            <Shuffle size={24} className='text-zinc-200'/>
            <SkipBack size={24} className='text-zinc-200'/>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-white text-black '>
                <Play fill='bg-black' />
            </button>
            <SkipForward size={24} className='text-zinc-200'/>
            <Repeat size={24} className='text-zinc-200'/>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 h-1 w-40 rounded-full"></div>
            </div>
            <span className='text-xs text-zinc-500'>2:24</span>
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap 2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 h-1 w-10 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
      </div>
    )
}