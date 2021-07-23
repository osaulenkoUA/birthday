import React from 'react';
import Balloon from './Balloon/ballon.js';
import s from './App.module.css';
import param from './param.js';

export default function App() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Happy Birthday Valentine !!!</h2>
      {param.map(item => (
        <Balloon key={Math.random()} param={item} />
      ))}
    </div>
  );
}
