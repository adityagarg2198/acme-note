import { FC } from 'react';
import { FeatureCardProps } from './FeatureCard.types';
import { AttentionSeeker } from 'react-awesome-reveal';

const FeatureCard: FC<FeatureCardProps> = ({ body, heading, icon }) => {
  return (
    <AttentionSeeker effect='pulse' duration={1300}>
      <div className='flex max-w-lg gap-4 flex-col'>
        <figure className='bg-white w-28 rounded-full h-28 drop-shadow-xl flex justify-center items-center cursor-pointer'>
          {icon}
        </figure>
        <h3 className='text-indigo-900 mt-8 font-extrabold text-3xl'>
          {heading}
        </h3>
        <p className='text-indigo-950 text-2xl'>{body}</p>
      </div>
    </AttentionSeeker>
  );
};

export default FeatureCard;
