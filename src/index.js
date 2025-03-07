import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Primeiro from './components/basicos/Primeiro';

const tag = <strong>Hello World</strong>

function Print(props) {
  return <div>{props}</div>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <Primeiro>
    </Primeiro>
);
