import ContactMe from '@/components/ContactMe';
import ProjectCard from '@/components/Project';
import Timeline from '@/components/Experience';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Name from '@/components/Name';
import CV from '@/components/CV';

export const metadata = {
  title: 'About Om Ramanuj',
  description: 'Learn more about Om Ramanuj and his journey in software development.',
  openGraph: {
    title: 'About Om Ramanuj',
    description: 'Discover Om Ramanuj’s story and achievements.',
    url: 'https://omramanuj.vercel.app/about',
  },
};


export default function Home() {
 

  return (
    <section className='h-full' >
      <div className='container mx-auto h-full'>
        <div  id="home" className='flex flex-col xl:flex-row items-center justify-around xl:pt-20 xl:pb-24 '>
          <div className='text-center order-2 xl:order-none xl:text-left xl:max-w-1/2'>
          <span className='text-xl'>gopher · next · mern </span>

            <h1 className="h1"><span className='h2'>Hello I&apos;m</span>  <br /><span className='text-accent'><Name/></span></h1>
            <p className='max-w-[500px] mt-4 mb-11 text-white/80'>I have fall-in love with programming and crafting creative solutions with <span className='text-accent'>#Go</span> and <span className='text-accent'>#Next</span></p>
            <div className='flex flex-col xl:flex-row max-w-[500px] gap-8'>
              <CV/>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6" iconStyles="w-full h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 xl:w-9" />
              </div>
            </div>

          </div>
          <div> <Photo /></div>
  
        </div>
        <div id="experience"><Timeline/></div>
        <div id="projects">
          <ProjectCard/>
        </div>
        <div id="contact">
          <ContactMe/>
        </div>
      </div>
    </section>
  );
}
