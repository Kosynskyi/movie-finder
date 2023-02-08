import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { ModeBtn } from './SwitchMode.styled';

const SwitchMode = () => {
  const [mode, setMode] = useState('dark');
  const [theme, setTheme] = useLocalStorage('my-theme', mode);
  const bodyEl = document.querySelector('body');

  useEffect(() => {
    setTheme(mode);

    if (mode === 'light') {
      bodyEl.setAttribute('data-theme', 'light');
    } else {
      bodyEl.setAttribute('data-theme', 'dark');
    }

    return () => {
      if (mode === 'light') {
        bodyEl.removeAttribute('data-theme', 'light');
      } else {
        bodyEl.removeAttribute('data-theme', 'dark');
      }
    };
  }, [bodyEl, mode, setTheme, theme]);

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    setTheme(mode);
  };

  return (
    <>
      <ModeBtn type="button" onClick={() => toggleMode()}>
        {mode === 'light' ? (
          <BsFillSunFill color="yellow" size={30} />
        ) : (
          <BsFillMoonStarsFill color="yellow" size={30} />
        )}
      </ModeBtn>
    </>
  );
};

export default SwitchMode;
