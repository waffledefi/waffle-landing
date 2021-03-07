import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'waffle-landing-uikit';

import './mvp.css';
import './shake.css';

const App = () => (
  <>
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
      <Button />
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
  </>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
