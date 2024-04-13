import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <main className='flex px-10 h-fit md:px-20 justify-between w-full mt-10'>
      <section className='flex flex-col justify-start lg:justify-center gap-10'>
        <Slide delay={100}>
          <h1 className='text-6xl mt-8 lg:mt-0  lg:text-8xl text-indigo-500 font-bold drop-shadow-md'>
            Don't Let Your Ideas Slip Away
          </h1>
        </Slide>
        <AttentionSeeker effect='rubberBand' duration={2000}>
          <button className='text-2xl md:text-4xl w-fit px-8 py-4 rounded-2xl bg-indigo-500 font-bold text-white hover:scale-105 transition ease-in-out delay-0'>
            Start Noting Now !
          </button>
        </AttentionSeeker>
      </section>
      <AttentionSeeker
        effect='swing'
        duration={1800}
        className='hero-section mix-blend-multiply hidden sm:block'>
        <section className='sm:hidden' />
      </AttentionSeeker>
    </main>
  );
};

export default HeroSection;
