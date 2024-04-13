import { Slide } from 'react-awesome-reveal';
import FeatureCard from '../../components/FeatureCard/FeatureCard.component';

const Features = () => {
  return (
    <section className='flex justify-center items-center flex-col px-20 mt-24 w-full gap-24'>
      <Slide direction='up'>
        <h2 className='text-7xl text-indigo-900 font-semibold'>
          Everything You Need in One Place
        </h2>
      </Slide>
      <section className='flex gap-28 flex-wrap justify-center'>
        <FeatureCard
          body='Implement AI-powered automatic tagging and smart folder suggestions
        based on content and context.'
          heading='Smart Folders & Tags:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-tags stroke-indigo-400'
              width='38'
              height='38'
              viewBox='0 0 24 24'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z' />
              <path d='M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592' />
              <path d='M7 10h-.01' />
            </svg>
          }
        />
        <FeatureCard
          body='Allow users to create mind maps for brainstorming and structuring
          complex ideas.'
          heading='Visual Mind Mapping:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-brain stroke-indigo-400'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8' />
              <path d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8' />
              <path d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5' />
              <path d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0' />
              <path d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5' />
              <path d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10' />
            </svg>
          }
        />
        <FeatureCard
          body='Enable linking notes together based on related topics or projects, fostering a knowledge base structure.'
          heading='Contextual Linking:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-layers-linked stroke-indigo-400 '
              width='35'
              height='35'
              viewBox='0 0 24 24'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3' />
              <path d='M5 15.734a2 2 0 0 1 -1 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3' />
            </svg>
          }
        />
        <FeatureCard
          body='Implement powerful search functionality that filters notes by keywords, tags, creation date, or even content type (text, image, code).'
          heading='Smart Search & Filtering:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-filters stroke-indigo-400'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0' />
              <path d='M8 11a5 5 0 1 0 3.998 1.997' />
              <path d='M12.002 19.003a5 5 0 1 0 3.998 -8.003' />
            </svg>
          }
        />
        <FeatureCard
          body='Offer a familiar rich text editor with formatting options and Markdown compatibility for code snippets.'
          heading='Rich Text Editing:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-text-spellcheck stroke-indigo-400'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5' />
              <path d='M5 10h7' />
              <path d='M10 18l3 3l7 -7' />
            </svg>
          }
        />
        <FeatureCard
          body='Allow users to drag and drop images, files, and even code snippets directly into their notes for a seamless workflow.'
          heading='Drag-and-Drop Functionality:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-drag-drop stroke-indigo-400'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              strokeWidth='1.8'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2' />
              <path d='M13 13l9 3l-4 2l-2 4l-3 -9' />
              <path d='M3 3l0 .01' />
              <path d='M7 3l0 .01' />
              <path d='M11 3l0 .01' />
              <path d='M15 3l0 .01' />
              <path d='M3 7l0 .01' />
              <path d='M3 11l0 .01' />
              <path d='M3 15l0 .01' />
            </svg>
          }
        />
        <FeatureCard
          body='Enable capturing audio notes with automatic transcription using speech recognition technology.'
          heading='Voice Notes:'
          icon={
            <svg
              className='fill-indigo-400'
              version='1.1'
              width='35'
              height='35'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 45.88 45.881'
              xmlSpace='preserve'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <g>
                  <g>
                    <path d='M15.95,10.471H29.96c0.951,0,1.727-0.765,1.727-1.715V8.651C31.687,3.88,27.814,0,23.043,0h-0.174 c-4.771,0-8.615,3.881-8.615,8.651v0.105C14.253,9.707,15,10.471,15.95,10.471z'></path>{' '}
                    <path d='M22.868,28.812h0.174c4.771,0,8.644-3.871,8.644-8.644v-3.455c0-1.107-0.903-2.006-2.011-2.006h-13.44 c-1.107,0-1.981,0.898-1.981,2.006v3.455C14.253,24.941,18.097,28.812,22.868,28.812z'></path>{' '}
                    <path d='M37.173,15.314h-0.035c-0.954,0-1.699,0.789-1.699,1.743v3.661c0,6.802-5.542,12.331-12.343,12.331h-0.284 c-6.801,0-12.313-5.529-12.313-12.331v-3.661c0-0.954-0.774-1.743-1.729-1.743H8.737c-0.954,0-1.747,0.789-1.747,1.743v3.695 c0,7.566,5.327,13.889,12.47,15.416v2.691h-3.544c-1.917,0-3.477,1.563-3.477,3.48v0.068c0,1.918,1.56,3.473,3.477,3.473h3.534 h7.013h3.535c1.916,0,3.445-1.555,3.445-3.473v-0.067c0-1.917-1.529-3.479-3.445-3.479h-3.516v-2.699 c7.082-1.542,12.409-7.87,12.409-15.443v-3.661C38.89,16.103,38.128,15.314,37.173,15.314z'></path>{' '}
                  </g>
                </g>
              </g>
            </svg>
          }
        />
        <FeatureCard
          body='Enable real-time co-editing of notes, allowing teams to work on projects simultaneously.'
          heading='Real-Time Collaboration:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-users stroke-indigo-400'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
              <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
              <path d='M16 3.13a4 4 0 0 1 0 7.75' />
              <path d='M21 21v-2a4 4 0 0 0 -3 -3.85' />
            </svg>
          }
        />
        <FeatureCard
          body='Provide pre-defined templates for various use cases (e.g., meeting notes, project planning, research summaries).'
          heading='Customizable Templates:'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-template stroke-indigo-400'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              strokeWidth='1.8'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z' />
              <path d='M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
              <path d='M14 12l6 0' />
              <path d='M14 16l6 0' />
              <path d='M14 20l6 0' />
            </svg>
          }
        />
      </section>
    </section>
  );
};

export default Features;
