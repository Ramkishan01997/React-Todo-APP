import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';

import './I18next';

import App from './App';

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
       <App />
  </Suspense>
  ,
  document.getElementById('root')
);


