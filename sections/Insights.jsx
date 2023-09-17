'use client';


import {motion} from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText, InsightCard } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once:false, amount: 0.25}}
      style={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title='| Insights' textStyles='text-center' />
        <TitleText title='Insight into ADLM Studio' textStyles='text-center' />
        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((insight, index) => (
            <InsightCard 
              key={`insight-${index}`}
              {...insight}
              index={index +1}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
