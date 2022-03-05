// ! Todo arquivo que utiliza .jsx necessita do React importado
import React from 'react';
import { render } from "react-dom";
import { App } from './App';

// ? render(o que eu quero renderizar, dentro de qual elemento eu quero renderizar essa informação)
render(<h1>Test</h1>, document.getElementById('root'))