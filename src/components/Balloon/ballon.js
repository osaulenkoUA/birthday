import React, { useState, useEffect } from 'react';
import rose from './rose.png';
import s from './balloon.module.css';
import Svg from '../assets/svg.js';

export default function App({ param }) {
    const { w, h, d } = param;
  const [state, setstate] = useState(false);
  const [height, setHeight] = useState(window.innerHeight-h);
  useEffect(() => {
    const id = setTimeout(() => {
      setHeight(height - d);
    }, 20);
    if (height < -215) setHeight(window.innerHeight);
    return () => clearTimeout(id);
  }, [height]);

  function foo() {
      setstate(true);
  }
  return (
    <>
      <div className={s.wrap_img} style={{ transform: `translateY(${height}px)`, left: w }}>
        {!state && <Svg foo={foo} />}
        {state && <img src={rose} alt={'img'}/>}
      </div>
    </>
  );
}
