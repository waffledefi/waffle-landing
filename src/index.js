import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { light } from '@pancakeswap-libs/uikit'

import { Button } from '@pancakeswap-libs/uikit';

import './mvp.css';
import './shake.css';

const App = () => (
  <ThemeProvider theme={light}>
    <header>
      <nav>
        <a href="/">🧇 WaffleDefi</a>
        <ul>
          <li>Home</li>
          <li><a href="https://github.com/waffledefi/" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </nav>
      <h1><span class="shake">🧇</span> WaffleDefi</h1>
      <p>Feel the crunchiness</p>
      <Button>Very soon</Button>
    </header>

    <main>
      <hr/>
      <section>
        <blockquote>
          Auto Market Maker
          <footer><i>Launching soon</i></footer>
        </blockquote>
      </section>
    </main>

    <footer>
      <hr/>
      <p>
        <small>WaffleDefi</small>
      </p>
    </footer>
  </ThemeProvider>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
