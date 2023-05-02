import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

const List = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: 'https://source.unsplash.com/random/800x400',
      caption: 'First slide',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/800x400',
      caption: 'Second slide',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/800x400',
      caption: 'Third slide',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 ${
            index === currentSlide ? '' : 'opacity-0 pointer-events-none'
          } transition-opacity duration-500`}
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
          />
          <img
            className="w-full h-full object-cover"
            src={slide.image}
            alt={slide.caption}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-4">{slide.caption}</h2>
            <p className="text-lg text-center max-w-md mx-auto">{slide.text}</p>
          </div>
        </div>
      ))}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="max-w-2xl">
          <div className="flex justify-center">
            <button className="mr-4" onClick={prevSlide}>
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </button>
            <button onClick={nextSlide}>
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
