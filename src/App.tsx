import React from 'react';
import logo from './logo.svg';
import {_newsList} from "@service"
// import './App.less';
import style from './App.module.less';

function App() {
  return (
    <div className={style["App"]}>
      <header className="App-header">
        <img src={logo} className={style['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          // className={style["App-link"]}
          // className={[`${style["App-link"]}`,`${style.red}`].join(' ')}
          className={`${style["App-link"]} ${style.red}`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span > Learn React</span>
        </a>
      </header>
    </div>
  );
}

export default App;
