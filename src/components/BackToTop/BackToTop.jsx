import React from 'react';
import { useState, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { BackToTopButton } from './BackToTop.styled';

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
        console.log('true');
      } else {
        setBackToTop(false);
        console.log('false');
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {backToTop && (
        <BackToTopButton onClick={scrollToTop}>
          <MdArrowUpward color="#e50914" size={25} />
        </BackToTopButton>
      )}
    </>
  );
};

export default BackToTop;
