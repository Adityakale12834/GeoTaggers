
export default function Card() {
  return (
    <div className='w-72 h-96  rounded-lg bg-gray-900 text-zinc-100 overflow-hidden mx-5 border border-gray-600 shadow-2xl '>
        <div className='flex justify-center items-end hover:scale-110 transition ease-in-out hover:text-3xl'>
        <div className='absolute font-link text-2xl pb-3'>
            World Map
        </div>
        <img src="https://source.unsplash.com/photo-of-outer-space-Q1p7bh3SHj8" alt="World map" className='rounded-lg'/>
        </div>
        <div className='font-link'>
            <p className='p-2 text-gray-300'>Embark on a global adventure in the Geoguessr world map, where every click unveils diverse landscapes, cultures, and challenges from around the globe.
            </p>
            <button type='button' className='transition ease-in-out hover:-translate-y-1 bg-zinc-100 text-zinc-900 py-1 px-16 mx-4 text-2xl rounded-lg border-black border-2 hover:bg-zinc-900 hover:text-zinc-100 hover:shadow-lg'>Start Game</button>
        </div>
    </div>
  )
}
