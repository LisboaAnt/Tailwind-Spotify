import { Play} from 'lucide-react'
import Image from 'next/image';

export function HomeMusics(){
    return(
  <div className='grid grid-cols-3 gap-4 mt-4'>
    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'> 
      <Image src="/album1.jpg" width={120} height={120} alt="Capa do álbum"/>
      <strong>Thriller</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
      </button>
    </a>
    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10'> 
      <Image src="/album2.jpg" width={120} height={120} alt="Capa do álbum"/>
      <strong>Back in Black</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
      </button>
    </a>
    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10'> 
      <Image src="/album3.jpg" width={120} height={120} alt="Capa do álbum"/>
      <strong>The Dark Side of the Moon</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
      </button>
    </a>
    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10'> 
      <Image src="/album4.jpg" width={120} height={120} alt="Capa do álbum"/>
      <strong>The Bodyguard</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
      </button>
    </a>
    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10'> 
      <Image src="/album5.jpg" width={120} height={120} alt="Capa do álbum"/>
      <strong>Rumours</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
      </button>
    </a>
    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10'> 
      <Image src="/album6.jpg" width={120} height={120} alt="Capa do álbum"/>
      <strong>Hotel California</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black'/>
      </button>
    </a>
  </div>

    )
}