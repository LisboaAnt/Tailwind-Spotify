import Image from "next/image";

export function MadeOf(){
    return (
    <div className='grid grid-cols-1 sm:grid-cols-5 gap-5 sm:gap-5 mt-4 sm:px-5'>
        <div className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/album1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum"/>
            <strong className='font-semibold'>Chill Vibes Mix</strong>
            <span className='text-sm text-zinc-500'>Curta sua playlist relaxante!</span>
        </div>
        <div className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/album2.jpg" className="w-full" width={120} height={120} alt="Capa do álbum"/>
            <strong className='font-semibold'>Workout Mix</strong>
            <span className='text-sm text-zinc-500'>Energize seu treino!</span>
        </div>
        <div className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/album3.jpg" className="w-full" width={120} height={120} alt="Capa do álbum"/>
            <strong className='font-semibold'>Party Hits Mix</strong>
            <span className='text-sm text-zinc-500'>Aumente o volume!</span>
        </div>
        <div className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/album4.jpg" className="w-full" width={120} height={120} alt="Capa do álbum"/>
            <strong className='font-semibold'>Focus Mix</strong>
            <span className='text-sm text-zinc-500'>Mantenha a concentração!</span>
        </div>
        <div className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/album5.jpg" className="w-full" width={120} height={120} alt="Capa do álbum"/>
            <strong className='font-semibold'>Throwback Mix</strong>
            <span className='text-sm text-zinc-500'>Reviva os clássicos!</span>
        </div>
    </div>
    );
}