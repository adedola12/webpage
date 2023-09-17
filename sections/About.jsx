'use client';

import {motion} from 'framer-motion';
import {TypingText} from '../components';

import styles from '../styles';
import {fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About ADLM Studio" textStyle="text-center" />

      <motion.p
        variants={fadeIn ('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to
        {' '}
        <span className="font-extrabold text-white">ADLM</span>
        {' '}
        - Your Gateway to Digital Excellence! At ADLM
        {' '}
        <span className="font-extrabold text-white">
          (Academy for Digital Learning and Mastery)
        </span>
        , we are committed to empowering individuals and organizations with cutting-edge digital skills. Our
        {' '}
        <span className="font-extrabold text-white">expert-led</span>
        {' '}
        courses in Building Information Modeling (BIM), digital construction, and more, are designed to shape the future of industries. Join us in a transformative journey of learning, innovation, and growth.
        {' '}
        <span className="font-extrabold text-white">
          Unlock your potential with ADLM today!
        </span>
      </motion.p>
      <motion.img 
        variants={fadeIn ('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
