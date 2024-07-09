import {Home as homeIcon, Search, Library, HomeIcon,} from 'lucide-react'


export function Sidebar(){
    return(
    <aside className="w-42 sm:w-64 bg-zinc-950 p-6">
        <div className='flex items-center gap-2 pb-5'>
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
        </div>

        <nav className='space-y-5'>
            <a href="" className='flex items-center  gap-3 text-sm font-semibold text-zinc-200'>
                <HomeIcon/>
                Home
            </a>
            <a href="" className='flex items-center  gap-3 text-sm font-semibold text-zinc-200'>
                <Search/>
                Search
            </a>
            <a href="" className='flex items-center  gap-3 text-sm font-semibold text-zinc-200'>
                <Library/>
                Your 
            </a>
        </nav>

        <nav className='mt-14 py-3 pb-5 p-2 flex flex-col gap-4 bg-white/10 rounded-2xl'>
            <span className='text-xl flex flex-col gap-4'>Mais Escutadas</span>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Pablo</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Amado Batista</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Marília Mendonça</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Gusttavo Lima</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Leonardo</a>
        </nav>

        <nav className='mt-14 py-3 pb-5 p-2 flex flex-col gap-4 bg-white/10 rounded-2xl'>
            <span className='text-xl flex flex-col gap-4'>Tocados Recentes</span>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Leno do Brega</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Reginaldo Rossi</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Wanderley Andrade</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Gilliard</a>
            <a href="#" className='pl-2 text-sm text-zinc-400 hover:text-zinc-100'>Waldick Soriano</a>
        </nav>

        </aside>
    )
}