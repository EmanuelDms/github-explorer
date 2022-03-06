// ! Em versões mais novas do React (a partir da v17) não é mais necessário importar o React em arquivos que utilizem o .jsx
//// import React from 'react';
import { render } from "react-dom";
import { App } from './App';

// ? render(o que eu quero renderizar, dentro de qual elemento eu quero renderizar essa informação)
render(<App />, document.getElementById('root'))