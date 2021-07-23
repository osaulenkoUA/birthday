import React, {useEffect, useState} from 'react';
import s from './balloon.module.css';
import Svg from '../assets/svg.js';

import img1 from '../../dataImg/img1.png';
import img3 from '../../dataImg/img3.png';
import img4 from '../../dataImg/img4.png';
import img5 from '../../dataImg/img5.png';
import img6 from '../../dataImg/img6.png';
import img7 from '../../dataImg/img7.png';
import img8 from '../../dataImg/img8.png';
import img9 from '../../dataImg/img9.png';
import img10 from '../../dataImg/img10.png';
import img11 from '../../dataImg/img11.png';
import img2 from '../../dataImg/img2.png';

export default function App({param}) {
    const {w, h, d,number} = param;
    const [state, setstate] = useState(false);
    const [height, setHeight] = useState(window.innerHeight - h);

    const dataImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

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
            <div className={s.wrap_img} style={{transform: `translateY(${height}px)`, left: w}}>
                {!state && <Svg foo={foo}/>}
                {state && <img src={dataImg[number]} alt={'img'}/>}
            </div>
        </>
    );
}
