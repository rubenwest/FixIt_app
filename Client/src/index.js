import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
/* import ThemeContext from './context/context'; */


ReactDOM.render(
  <React.StrictMode>
{/*       <ThemeContext> */}
          <Routes />
{/*       </ThemeContext> */}
  </React.StrictMode>,
  document.getElementById('root')
);



