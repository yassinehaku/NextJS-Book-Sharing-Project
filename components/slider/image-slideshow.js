'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import DiaryCeoImg from '@/assets/Diary_of_Ceo.jpg';
import ConversationImg from '@/assets/Conversation.jpg';
import PomImg from '@/assets/POM.png';
import PowerPauseImg from '@/assets/Power_Pause.jpg';
import ShiftImg from '@/assets/Shift.jpg';
import SubtleArtImg from '@/assets/subtleart.jpg';
import ThreeDaysImg from '@/assets/Three_days_June.jpg';



import classes from './image-slideshow.module.css';

const images = [
  { image: DiaryCeoImg, alt: 'The Diary Of a Ceo' },
  { image: ConversationImg, alt: 'The Next Conversation' },
  { image: PomImg, alt: 'The Psychology of Money' },
  { image: PowerPauseImg, alt: 'The Power of a Pause' },
  { image: ShiftImg, alt: 'Shift your emotions' },
  { image: SubtleArtImg, alt: 'Subtle art of not giving a f*' },
  { image: ThreeDaysImg, alt: 'Three days in June' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}