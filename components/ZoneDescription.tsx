
export default function ZoneDescription({ descritption, neighborhoods }: { descritption: string, neighborhoods: string[] }) {
    return (
        <div className='flex flex-col md:flex-row gap-0 md:gap-4 text-darkTheme-text mt-6 md:mt-4'>
            <div className=' md:max-w-5xl md:bg-darkTheme-accent text-darkTheme-secondary md:text-darkTheme-text md:p-4 rounded-r-md '>
                <p className='font-semibold text-start'>{descritption}</p>
            </div>
            <div className='bg-darkTheme-bg max-w-sm md:max-w-none md:min-w-4xl p-4 flex flex-wrap gap-2 rounded-md shadow-md max-h-screen md:max-h-64 overflow-y-auto flex-basis-1/3'>
                {neighborhoods.map((neighborhood, index) => (
                    <h3 key={index} className='text-sm font-semibold'>{neighborhood}</h3>
                ))}
            </div>
        </div>
    );
}